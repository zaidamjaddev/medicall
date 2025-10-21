// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_PUBLIC_KEY!);

const PLANS: Record<string, { priceId: string; name: string }> = {
  basic_plan: { priceId: "price_1SKdOvCDEUfdDPDne4ovWyW2", name: "Basic" },
  pro_plan: { priceId: "price_1Kdef...", name: "Pro" },
  premium_plan: { priceId: "price_1Kghi...", name: "Premium" },
};

export async function POST(req: Request) {
  try {
    const { planId } = await req.json();

    
    const plan = PLANS[planId];
    console.log(plan)
    if (!plan) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription", 
      line_items: [
        {
          price: plan.priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
      
      metadata: {
        planId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: err.message || "Internal error" }, { status: 500 });
  }
}

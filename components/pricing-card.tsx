"use client"

import { useState } from "react"
import { Check } from "lucide-react"

interface Plan {
  name: string
  description: string
  price: string
  period: string
  cta: string
  highlighted: boolean
  features: string[]
}

interface PricingCardProps {
  plan: Plan
}

export function PricingCard({ plan }: PricingCardProps) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)

    try {
      const planMap: Record<string, string> = {
        Starter: "basic_plan",
        Professional: "pro_plan",
        Enterprise: "premium_plan",
      }

      const planId = planMap[plan.name]

      if (!planId) {
        alert("Invalid plan")
        return
      }

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      })

      const data = await res.json()

      if (data.url) {
        window.location.href = data.url 
      } else {
        alert(data.error || "Something went wrong.")
      }
    } catch (err) {
      console.error("Checkout error:", err)
      alert("Checkout failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className={`rounded-2xl p-8 flex flex-col h-full transition-all ${
        plan.highlighted
          ? "border-2 border-primary bg-primary/5 shadow-lg scale-105 md:scale-100"
          : "border border-border bg-card hover:border-primary/50"
      }`}
    >
      {plan.highlighted && (
        <div className="mb-4 inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium w-fit">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
      <p className="text-foreground/70 text-sm mb-6">{plan.description}</p>

      <div className="mb-6">
        <span className="text-5xl font-bold text-foreground">{plan.price}</span>
        <span className="text-foreground/70 ml-2">{plan.period}</span>
      </div>

      <button
        onClick={handleCheckout}
        disabled={loading }
        className={`w-full py-3 rounded-full font-semibold transition-colors mb-8 text-center ${
          plan.highlighted
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "border-2 border-primary text-primary hover:bg-primary/5"
        } ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
      >
        {loading ? "Loading..." : plan.cta}
      </button>

      <div className="space-y-4 flex-1">
        {plan.features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
            <span className="text-foreground/80 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

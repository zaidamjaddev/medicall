// app/pricing/page.tsx
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import PricingClient from "./PricingClient"



export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <PricingClient />
      <Footer />
    </main>
  )
}

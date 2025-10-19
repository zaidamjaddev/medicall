// app/services/page.tsx (Server Component)
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import ServicesClient from "./ServicesClient"



export default function ServicesPage() {
  return (
    <main className="min-h-screen ">
      <Navigation />
      <ServicesClient />
      <Footer />
    </main>
  )
}

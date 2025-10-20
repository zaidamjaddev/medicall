import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import dynamic from "next/dynamic"

const AboutClient = dynamic(() => import("./AboutClient"))

export default function AboutPage() {
  return (
    <main className="min-h-screen ">
      <Navigation />

    
      <AboutClient />

      <Footer />
      
    </main>
  )
}

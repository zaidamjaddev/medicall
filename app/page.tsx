import Hero from "./hero"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"


export default function Home() {
 
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

     <Hero/>

      <Footer />
    </main>
  )
}

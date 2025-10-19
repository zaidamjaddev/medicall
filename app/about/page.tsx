import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import AboutClient from "./AboutClient"


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      <Navigation />

      {/* Client-side animation & interactivity */}
      <AboutClient />

      <Footer />
      
      {/* <style jsx>{ @keyframes fade-in { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } } @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } } @keyframes slide-in-left { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } } @keyframes slide-in-right { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } } @keyframes scale-in { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } } @keyframes blob { 0%, 100% { transform: translate(0, 0) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } } @keyframes pulse-glow { 0%, 100% { opacity: 1; filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5)); } 50% { opacity: 0.8; filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.8)); } } @keyframes float { 0%, 100% { transform: translateY(0) translateX(0); } 50% { transform: translateY(-20px) translateX(20px); } } .animate-fade-in { animation: fade-in 1s ease-out; } .animate-fade-in-up { animation: fade-in-up 1s ease-out; animation-fill-mode: both; } .animate-slide-in-left { animation: slide-in-left 1s ease-out; } .animate-slide-in-right { animation: slide-in-right 1s ease-out; } .animate-scale-in { animation: scale-in 0.8s ease-out; animation-fill-mode: both; } .animate-blob { animation: blob 7s infinite; } .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; } .animate-float { animation: float 6s ease-in-out infinite; } .animate-float-delayed { animation: float 6s ease-in-out infinite; animation-delay: 3s; } .animation-delay-2000 { animation-delay: 2s; } .animation-delay-4000 { animation-delay: 4s; } }</style> */}
    </main>
  )
}

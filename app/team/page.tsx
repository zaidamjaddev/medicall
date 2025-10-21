'use client'

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import TeamGrid from "./TeamGrid"
import { motion } from "framer-motion"

export default function TeamPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const floatAnimation = {
    animate: { y: [0, -20, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } },
  }

  const floatDelayedAnimation = {
    animate: { y: [0, 20, 0], transition: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 } },
  }

  return (
    <main className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-800 to-indigo-900" />

        <motion.div
          className="relative max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold text-slate-50 mb-6 leading-tight"
          >
            Meet Our Team
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Talented healthcare professionals working together
            to transform patient communication.
          </motion.p>
        </motion.div>
      </section>

      {/* Client-Side Animated Grid */}
      <TeamGrid darkTheme />

      {/* Culture / Join Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />

        {/* Floating blobs */}
        <motion.div className="absolute inset-0 opacity-10">
          <motion.div
            variants={floatAnimation}
            animate="animate"
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"
          />
          <motion.div
            variants={floatDelayedAnimation}
            animate="animate"
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl"
          />
        </motion.div>

        <motion.div
          className="relative max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div
            variants={scaleIn}
            className="inline-block mb-6 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700"
          >
            <p className="text-sm font-medium text-emerald-400">Join Our Mission</p>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Join our growing team and help us transform healthcare
            communication. We're looking for talented engineers, product
            managers, and healthcare professionals.
          </motion.p>

          <motion.div
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="/careers"
              className="inline-block px-8 py-4 bg-blue-500 text-white rounded-full font-semibold shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all"
            >
              View Open Positions
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}

"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import FAQContent from "./FAQContent"
import { motion } from "framer-motion"

export default function FAQPage() {
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
  }

  const blobVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.2, 0.4, 0.2],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
    },
  }

  return (
    <main className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

        <motion.div
          variants={blobVariants}
          animate="animate"
          className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl"
        />
        <motion.div
          variants={blobVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl"
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl font-bold text-slate-50 mb-6 leading-tight"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Find answers to common questions about Smart Connect4u. Can't find what you're looking for? Contact our team.
          </motion.p>
        </div>
      </section>

      {/* Client-side FAQ Section */}
      <FAQContent />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-600 rounded-3xl p-12 overflow-hidden shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-emerald-600/20" />

            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300/10 rounded-full filter blur-3xl"
            />

            <div className="relative text-center">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-white mb-4"
              >
                Still have questions?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-blue-100 mb-8"
              >
                Our team is here to help. Reach out and we'll answer any questions you have.
              </motion.p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

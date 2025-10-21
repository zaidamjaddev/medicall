'use client'

import Link from "next/link"
import { ArrowRight, Phone, Zap, Clock, TrendingUp } from "lucide-react"
import Counter from "@/components/Counter"
import { motion } from "framer-motion"

export default function Hero(){

     const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: 0.2 },
        },
      }
    
      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }
    
      const buttonVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hover: { scale: 1.05, transition: { duration: 0.2 } },
      }
    
      const featureCardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hover: { y: -8, transition: { duration: 0.3 } },
      }
    
    return <>
     {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900">
        {/* background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative max-w-5xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-6 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700"
          >
            <p className="text-sm font-medium text-emerald-400">
              AI-Powered Healthcare Solutions
            </p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-50 mb-6 leading-tight"
          >
            Never Miss a Call Again
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Intelligent AI call answering and lead generation for dentists and healthcare clinics.
            Available 24/7 to capture every opportunity.
          </motion.p>

          {/* ✅ Responsive Buttons Layout */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <motion.div variants={buttonVariants} whileHover="hover" className="w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Book a Demo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div variants={buttonVariants} whileHover="hover" className="w-full sm:w-auto">
              <Link
                href="https://ourfertility-matters.com"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-emerald-500 text-emerald-400 rounded-full font-semibold hover:bg-emerald-500/10 transition-all shadow-sm"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">
            Why Choose MediCall AI?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-300">
            Trusted by healthcare professionals nationwide
          </motion.p>
        </motion.div>

        {/* Responsive feature cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {[
            { icon: Clock, title: "Never Miss a Call", desc: "Always available, 24/7 call management." },
            { icon: Zap, title: "Instant Response", desc: "AI answers and routes calls in real-time." },
            { icon: TrendingUp, title: "Lead Generation", desc: "Turn every missed call into a new patient." },
            { icon: Phone, title: "Seamless Integration", desc: "Connects easily with your existing systems." },
          ].map((f, i) => (
            <motion.div
              key={i}
              variants={featureCardVariants}
              whileHover="hover"
              className="group p-6 rounded-2xl border border-slate-700 bg-slate-800 hover:border-blue-500 transition-all shadow-sm hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-md">
                <f.icon size={28} className="text-white" />
              </div>
              <h3 className="font-semibold text-lg text-slate-50 mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12"
        >
          {[
            { value: <Counter end={500} suffix="+" />, label: "Healthcare Practices" },
            { value: <Counter end={2} suffix="M+" />, label: "Calls Answered" },
            { value: <Counter end={98} suffix="%" />, label: "Satisfaction Rate" },
          ].map((stat, i) => (
            <motion.div key={i} variants={itemVariants}>
              <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">{stat.value}</div>
              <p className="text-slate-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-slate-50 mb-4">
            Ready to Transform Your Practice?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-slate-300 mb-8">
            Join hundreds of professionals using MediCall AI.
          </motion.p>
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-blue-500 text-white rounded-full font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:bg-blue-600 transition-all"
            >
              Get Started Today
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
}
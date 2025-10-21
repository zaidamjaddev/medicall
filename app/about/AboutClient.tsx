"use client"

import { useState, useEffect } from "react"
import { Zap } from "lucide-react"
import { motion } from "framer-motion"
import ContactButton from "@/components/contact-button"

const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) setIsVisible(true)
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById(`counter-${end}-${suffix}`)
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [end, suffix, isVisible])

  useEffect(() => {
    if (!isVisible) return
    const duration = 2000,
      steps = 50
    const increment = end / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isVisible, end])

  return (
    <span id={`counter-${end}-${suffix}`}>
      {count}
      {suffix}
    </span>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function AboutClient() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          style={{ y: scrollY * 0.3 }}
        />

        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-10 left-1/2 w-72 h-72 bg-blue-400/10 rounded-full mix-blend-screen filter blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="relative max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-50 via-blue-500 to-emerald-500 bg-clip-text text-transparent mb-6 leading-tight"
            variants={itemVariants}
          >
            About MediCall AI
          </motion.h1>
          <motion.p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed" variants={itemVariants}>
            We're on a mission to transform healthcare communication by making AI-powered call answering accessible to
            every practice.
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeftVariants}
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-50 to-blue-500 bg-clip-text text-transparent mb-6">
              Our Story
            </h2>
            <motion.p
              className="text-lg text-slate-300 mb-4 leading-relaxed"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              MediCall AI was founded in 2022 by healthcare professionals and AI engineers who saw a problem: thousands
              of healthcare practices were losing patients because they couldn't answer calls fast enough.
            </motion.p>
            <motion.p
              className="text-lg text-slate-300 mb-4 leading-relaxed"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 }}
            >
              We built MediCall AI to solve this. Today, we help over 500 healthcare practices across the country handle
              millions of calls every month, converting more inquiries into appointments and revenue.
            </motion.p>
            <motion.p
              className="text-lg text-slate-300 leading-relaxed"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              Our mission is simple: make healthcare communication smarter, faster, and more human.
            </motion.p>
          </motion.div>

          <motion.div
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRightVariants}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl transform opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              whileHover={{ rotate: 6, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-emerald-500 rounded-2xl h-96 flex items-center justify-center border border-blue-500/30 shadow-2xl shadow-blue-500/20 overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(59, 130, 246, 0.4)" }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <motion.div
                className="relative text-center z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Zap size={64} className="mx-auto text-white mb-4" />
                </motion.div>
                <p className="text-white/90 font-medium text-lg">Transforming Healthcare Communication</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900" />

        <motion.div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"
            animate={{
              y: [0, -50, 0],
              x: [0, -30, 0],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { end: 500, suffix: "+", label: "Healthcare Practices" },
              { end: 2, suffix: "M+", label: "Calls Answered" },
              { end: 98, suffix: "%", label: "Satisfaction Rate" },
              { end: 50, suffix: "+", label: "Team Members" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleInVariants}
                whileHover={{ scale: 1.1, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                  <Counter end={item.end} suffix={item.suffix} />
                </div>
                <p className="text-slate-300">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={scaleInVariants}
        >
          <motion.div
            className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-emerald-500 rounded-3xl p-12 border border-blue-500/30 shadow-2xl shadow-blue-500/20 overflow-hidden group"
            whileHover={{
              boxShadow: "0 25px 70px rgba(59, 130, 246, 0.4)",
              scale: 1.02,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-black/10" />
            <motion.div
              className="relative text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 className="text-4xl font-bold text-white mb-4" variants={itemVariants}>
                Join the Healthcare AI Revolution
              </motion.h2>
              <motion.p className="text-lg text-slate-100 mb-8" variants={itemVariants}>
                See how MediCall AI can transform your practice. Schedule a demo with our team today.
              </motion.p>
              <motion.div variants={itemVariants}>
                <ContactButton />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
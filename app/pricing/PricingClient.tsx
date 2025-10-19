"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PricingCard } from "@/components/pricing-card"
import Link from "next/link"

// FAQ Item Component with Framer Motion
const FAQItem = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-start gap-4 hover:bg-slate-50 transition-colors duration-200"
        whileHover={{ backgroundColor: "rgba(248, 250, 252, 0.5)" }}
      >
        <h3 className="font-semibold text-slate-900 flex-1 text-left">{item.q}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-sm font-bold"
        >
          +
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-slate-200"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="p-6 text-slate-600 leading-relaxed"
            >
              {item.a}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function PricingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small practices",
      price: "$299",
      period: "/month",
      cta: "Get Started",
      highlighted: false,
      gradient: "from-cyan-500 to-blue-500",
      features: [
        "Up to 500 calls/month",
        "Basic call answering",
        "Appointment scheduling",
        "Email support",
        "Standard analytics",
        "1 user account",
      ],
    },
    {
      name: "Professional",
      description: "For growing practices",
      price: "$799",
      period: "/month",
      cta: "Start Free Trial",
      highlighted: true,
      gradient: "from-indigo-600 to-blue-600",
      features: [
        "Up to 2,000 calls/month",
        "Advanced AI conversations",
        "Smart appointment scheduling",
        "Priority support",
        "Advanced analytics",
        "Up to 5 user accounts",
        "SMS notifications",
        "Custom workflows",
        "API access",
      ],
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      period: "pricing",
      cta: "Contact Sales",
      highlighted: false,
      gradient: "from-blue-700 to-indigo-700",
      features: [
        "Unlimited calls",
        "Custom AI training",
        "Multi-location support",
        "Dedicated account manager",
        "Custom integrations",
        "Unlimited user accounts",
        "Advanced security",
        "SLA guarantee",
        "White-label options",
      ],
    },
  ]

  const faqs = [
    {
      q: "Can I change plans anytime?",
      a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
    },
    {
      q: "Is there a setup fee?",
      a: "No setup fees. You can start using MediCall AI immediately after signing up. Professional and Enterprise plans include onboarding support.",
    },
    {
      q: "What if I exceed my call limit?",
      a: "We'll notify you when you're approaching your limit. You can upgrade anytime, or we can discuss custom limits for your needs.",
    },
    {
      q: "Do you offer discounts for annual billing?",
      a: "Yes! Annual plans receive a 20% discount. Contact our sales team for details.",
    },
    {
      q: "Is there a free trial?",
      a: "Professional and Enterprise plans include a 14-day free trial. Starter plan is available with a 7-day trial.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, ACH transfers, and wire transfers for Enterprise customers.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50"
          style={{ y: scrollY * 0.3 }}
        />

        {/* Animated blobs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          className="absolute top-40 right-10 w-96 h-96 bg-indigo-300/20 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, delay: 4 }}
          className="absolute bottom-10 left-1/2 w-96 h-96 bg-cyan-300/20 rounded-full mix-blend-multiply filter blur-3xl"
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Choose the plan that fits your practice. All plans include 24/7 support and HIPAA compliance.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} index={idx} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <FAQItem key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 rounded-3xl p-12 overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative text-center">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-bold text-white mb-4"
              >
                Still have questions?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-blue-100 mb-8"
              >
                Our team is here to help. Schedule a call with a specialist to find the perfect plan for your practice.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-white text-indigo-700 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Schedule a Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

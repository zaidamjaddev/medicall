'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PricingCard } from "@/components/pricing-card"
import Link from "next/link"

const FAQItem = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-slate-800 rounded-xl border border-slate-700 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-start gap-4 hover:bg-slate-700 transition-colors duration-200"
        whileHover={{ backgroundColor: "rgba(71, 85, 105, 0.5)" }}
      >
        <h3 className="font-semibold text-slate-50 flex-1 text-left">{item.q}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white text-sm font-bold"
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
            className="border-t border-slate-700"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="p-6 text-slate-300 leading-relaxed"
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
      name: "Bronze ",
      description: "Perfect for small businesses wanting to ensure every missed call is handled professionally. Our AI answers calls instantly, captures key details, and helps you never lose another customer opportunity.",
      price: "$1000",
      period: "/month",
      cta: "Buy Now",
      highlighted: false,
      gradient: "from-cyan-500 to-blue-500",
      features: [
        "Missed calls automatically answered by AI",
        
      ],
    },
    {
      name: "Silver",
      description: "Ideal for growing teams. This plan ensures that both your calls and emails are managed efficiently by AI, keeping your communication consistent, fast, and reliable — even when your team is busy.",
      price: "$2000",
      period: "/month",
      cta: "Buy Now",
      highlighted: true,
      gradient: "from-indigo-600 to-blue-600",
      features: [
        "Missed calls automatically answered by AI",
        "Emails automatically responded to by AI",
       
      ],
    },
    {
      name: "Gold",
      description: "A complete communication and content solution. This plan combines AI call handling and email automation with smart content creation — helping your brand stay active, engaging, and connected online.",
      price: "$3000",
      period: "/month",
      cta: "Buy Now",
      highlighted: false,
      gradient: "from-blue-700 to-indigo-700",
      features: [
        "Missed calls automatically answered by AI",
        "AI-powered email responses",
        "AI-generated social media posts and blogs",
       
      ],
    },
    // 
     {
      name: "Platinum",
      description: "A complete communication and content solution. This plan combines AI call handling and email automation with smart content creation — helping your brand stay active, engaging, and connected online.",
      price: "$4000",
      period: "/month",
      cta: "Buy Now",
      highlighted: false,
      gradient: "from-blue-700 to-indigo-700",
      features: [
        "Missed calls automatically answered by AI",
        "AI-powered email responses",
        "AI-generated social media posts and blogs",
        "AI-assisted lead generation (warm leads for your business)",
       
      ],
    },
     {
      name: "Custom",
      description: "Need something unique? Our Custom Automation plan is built for teams who want to take AI even further. Whether you’re looking to automate internal processes, manage complex communication flows, or connect multiple systems into one smart platform — we’ll design and build it for you.",
      price: "$5000",
      period: "/month",
      cta: "Buy Now",
      highlighted: false,
      gradient: "from-blue-700 to-indigo-700",
      features: [
        "Fully tailored AI solutions designed around your business needs",
        "Automate calls, emails, lead management, and workflows",
        "Custom integrations with your CRM, EHR, or internal systems",
        "Dedicated automation specialist and ongoing support",
       
      ],
    },
  ]
const faqs = [
  {
    q: "Can I change or upgrade my plan anytime?",
    a: "Yes, you can upgrade or downgrade your plan whenever you like. We make it simple to adjust as your business grows or your automation needs change.",
  },
  {
    q: "Is there a setup or onboarding fee?",
    a: "No setup fees. All plans include fast onboarding, and our team will help you get started within 24–48 hours.",
  },
  {
    q: "What if my business needs something custom?",
    a: "Our Custom Automation plan is ideal for that. Whether you need unique AI workflows, CRM integrations, or multi-channel automation, we’ll design a solution built specifically for your business.",
  },
  {
    q: "Do you offer annual or long-term discounts?",
    a: "Currently, we offer flexible month-to-month plans with no long-term commitments. You can cancel or change your plan anytime.",
  },
  
  {
    q: "What payment methods do you accept?",
    a: "We currently accept all payments securely through Stripe. You can pay using any major credit or debit card via our checkout system.",
  },
]


  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          style={{ y: scrollY * 0.3 }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-slate-50 mb-6 leading-tight"
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Choose the plan that fits your practice. All plans include 24/7 support and HIPAA compliance.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} index={idx} darkTheme />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-50 mb-12 text-center"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-emerald-500 rounded-3xl p-12 overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative">
              <motion.h2 className="text-4xl font-bold text-white mb-4">
                Still have questions?
              </motion.h2>
              <motion.p className="text-lg text-blue-100 mb-8">
                Our team is here to help. Schedule a call with a specialist to find the perfect plan for your practice.
              </motion.p>
              <motion.div whileHover={{ scale: 1.05 }}>
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

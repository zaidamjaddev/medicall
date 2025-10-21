'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    question: "What is MediCall AI?",
    answer:
      "MediCall AI is an advanced AI-powered call answering and marketing solution designed specifically for healthcare and dental practices. We handle patient calls, schedule appointments, and generate qualified leads while maintaining HIPAA compliance.",
  },
  {
    question: "How does MediCall AI handle patient privacy?",
    answer:
      "Patient privacy is our top priority. MediCall AI is fully HIPAA compliant and uses enterprise-grade encryption to protect all patient data. We never share or sell patient information.",
  },
  {
    question: "Can MediCall AI integrate with my existing systems?",
    answer:
      "Yes! MediCall AI seamlessly integrates with most practice management systems, EHR platforms, and CRM tools. Our team will help ensure smooth integration with your existing workflow.",
  },
  {
    question: "What kind of calls can MediCall AI handle?",
    answer:
      "MediCall AI can handle appointment scheduling, patient inquiries, lead qualification, follow-up calls, and general patient communication. Our AI learns your practice's specific needs and protocols.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most practices are up and running within 48 hours. Our onboarding team will guide you through setup, training, and integration with your existing systems.",
  },
  {
    question: "What support do you provide?",
    answer:
      "We provide 24/7 customer support, regular training sessions, performance analytics, and continuous optimization to ensure you get the best results from MediCall AI.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const accordionVariants = {
  collapsed: { opacity: 0, height: 0 },
  expanded: { opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeInOut" } },
}

export default function FAQContent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-slate-700 rounded-lg overflow-hidden hover:border-emerald-400/50 transition-colors duration-300"
            >
              <motion.button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-slate-800 hover:bg-slate-700 transition-colors duration-300 group"
              >
                <span className="text-lg font-semibold text-slate-50 text-left">{item.question}</span>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    variants={accordionVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-slate-800 border-t border-slate-700">
                      <p className="text-slate-300 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

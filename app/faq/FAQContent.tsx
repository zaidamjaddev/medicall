'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqItems = [
  {
    question: "What is Smart Connect4u?",
    answer:
      "Smart Conncet4u is an advanced AI automation solution built for healthcare and dental practices. It answers missed calls, responds to emails, manages social media, and even generates warm leads — all while maintaining full HIPAA compliance.",
  },
  {
    question: "How does Smart Connect4u handle patient privacy?",
    answer:
      "Patient privacy and data protection are our top priorities. Smart Connect4u is fully HIPAA compliant and uses enterprise-grade encryption to secure all patient and business data. We never share or sell your information.",
  },
  {
    question: "Can Smart Connect4u integrate with our existing systems?",
    answer:
      "Yes. Smart Connect4u integrates seamlessly with most EHR, CRM, and scheduling systems. Our team assists you during setup to ensure everything works smoothly with your existing workflow.",
  },
  {
    question: "What types of automation can Smart Connect4u handle?",
    answer:
      "Depending on your plan, Smart Connect4u can manage missed calls, respond to emails, handle social media engagement, create AI-powered blog content, and even generate warm leads for your practice.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most practices are fully set up and live within 48 hours. Our onboarding team walks you through configuration, testing, and integration so you can start automating right away.",
  },
  {
    question: "Do you offer custom automation solutions?",
    answer:
      "Yes! Our Custom Automation package is ideal for practices needing specialized AI workflows — from custom CRM integrations to tailored marketing automations designed specifically for your operations.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide 24/7 support via chat and email, along with proactive system monitoring, performance insights, and regular optimization updates to ensure your automations keep improving.",
  },
  {
    question: "How do I pay for my plan?",
    answer:
      "All payments are securely processed through Stripe. We offer simple month-to-month billing with no long-term contracts — upgrade, downgrade, or cancel anytime.",
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

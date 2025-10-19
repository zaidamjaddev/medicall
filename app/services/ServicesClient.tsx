"use client"

import { Phone, MessageSquare, BarChart3, Shield, Zap, Check } from "lucide-react"
import { motion } from "framer-motion"
import ContactButton from "@/components/contact-button"

const ServiceCard = ({ service, index }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1 + 0.2,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      rotate: 6,
      transition: { duration: 0.3 },
    },
  }

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.1 + 0.3 + i * 0.05,
        ease: "easeOut",
      },
    }),
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ y: -8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-xl shadow-indigo-100 hover:shadow-2xl hover:shadow-indigo-200 transition-all duration-500 overflow-hidden"
    >
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        whileHover={{ opacity: 0.15 }}
      />

      <div className="relative">
        <motion.div
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
        >
          <service.icon size={32} className="text-white" />
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.1, duration: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-slate-900 mb-4"
        >
          {service.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.15, duration: 0.4 }}
          viewport={{ once: true }}
          className="text-slate-600 mb-6 leading-relaxed"
        >
          {service.description}
        </motion.p>

        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <motion.li
              key={idx}
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              custom={idx}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center mt-0.5`}
              >
                <Check size={12} className="text-white" />
              </motion.div>
              <span className="text-slate-600 text-sm">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  const services = [
    {
      icon: Phone,
      title: "24/7 Call Answering",
      description: "AI-powered call answering that never sleeps...",
      features: [
        "Instant answer times",
        "Natural conversations",
        "Multi-language support",
        "Call recording & transcription",
      ],
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      icon: MessageSquare,
      title: "Appointment Scheduling",
      description: "Automated appointment booking integrated with your calendar...",
      features: ["Calendar integration", "Conflict detection", "Automated reminders", "Patient confirmations"],
      gradient: "from-indigo-600 to-blue-600",
    },
    {
      icon: BarChart3,
      title: "Lead Generation & Analytics",
      description: "Convert more calls into appointments...",
      features: ["Real-time dashboards", "Call analytics", "Lead tracking", "Performance reports"],
      gradient: "from-cyan-600 to-teal-500",
    },
    {
      icon: MessageSquare,
      title: "Patient Communication",
      description: "Automated SMS and email notifications...",
      features: ["SMS notifications", "Email campaigns", "Appointment reminders", "Follow-up sequences"],
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security with full HIPAA compliance...",
      features: ["End-to-end encryption", "HIPAA certified", "Data backup", "Audit logs"],
      gradient: "from-indigo-700 to-blue-700",
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Works with your existing practice management software...",
      features: ["EHR integration", "API access", "Webhook support", "Custom workflows"],
      gradient: "from-cyan-500 to-blue-500",
    },
  ]

  const blobVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
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

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50" />

        <motion.div
          variants={blobVariants}
          animate="animate"
          className="absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          variants={blobVariants}
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-40 right-10 w-96 h-96 bg-indigo-300/20 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          variants={blobVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 w-96 h-96 bg-cyan-300/20 rounded-full mix-blend-multiply filter blur-3xl"
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight"
          >
            Comprehensive AI Solutions for Healthcare
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to streamline patient communication, boost appointments, and grow your practice.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 rounded-3xl p-12 overflow-hidden shadow-2xl group"
          >
            <motion.div className="absolute inset-0 bg-black/10" whileHover={{ opacity: 0.15 }} />
            <div className="relative text-center">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-white mb-4"
              >
                Ready to Transform Your Practice?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-blue-100 mb-8"
              >
                See how MediCall AI can help you handle more calls, book more appointments, and grow your business.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <ContactButton />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

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
      svg: (
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-40 h-40"
        >
          <path
            fill="#06B6D4"
            d="M44.4,-61.7C57.5,-53.8,67.2,-38.8,70.8,-23.1C74.5,-7.5,72,9,63.9,22.2C55.8,35.3,42,45.1,27.2,53.5C12.5,61.9,-3.1,68.9,-17.3,65.7C-31.5,62.4,-44.3,48.9,-53.8,34C-63.3,19.1,-69.6,2.8,-68.3,-13.3C-67.1,-29.4,-58.4,-45.2,-45.2,-53.4C-32,-61.5,-16,-62,-0.3,-61.7C15.3,-61.5,30.7,-60,44.4,-61.7Z"
            transform="translate(100 100)"
          />
        </svg>
      ),
    },
    {
      icon: MessageSquare,
      title: "Appointment Scheduling",
      description: "Automated appointment booking integrated with your calendar...",
      features: ["Calendar integration", "Conflict detection", "Automated reminders", "Patient confirmations"],
      gradient: "from-indigo-600 to-blue-600",
      svg: (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40">
          <path
            fill="#4F46E5"
            d="M48.7,-65.8C61.9,-57.4,71.5,-41.2,75.9,-24.3C80.3,-7.5,79.5,10,71.5,25.7C63.5,41.3,48.2,55.2,31.4,63.8C14.5,72.3,-4,75.5,-20.3,69.6C-36.6,63.8,-50.6,48.9,-58.9,32.3C-67.2,15.7,-69.8,-2.5,-65.4,-19.8C-61,-37.2,-49.6,-53.7,-34.5,-63.1C-19.3,-72.5,-0.4,-74.7,16.5,-71.5C33.5,-68.3,48.6,-59.8,48.7,-65.8Z"
            transform="translate(100 100)"
          />
        </svg>
      ),
    },
    {
      icon: BarChart3,
      title: "Lead Generation & Analytics",
      description: "Convert more calls into appointments...",
      features: ["Real-time dashboards", "Call analytics", "Lead tracking", "Performance reports"],
      gradient: "from-cyan-600 to-teal-500",
      svg: (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40">
          <path
            fill="#14B8A6"
            d="M43.2,-63.5C56.8,-53.4,69.6,-43.2,77.3,-29.5C85,-15.9,87.6,1.3,83.1,17.8C78.5,34.3,66.8,50.2,52.1,60.9C37.5,71.5,19.8,77,2.2,74.3C-15.4,71.7,-30.8,60.8,-45.8,50.1C-60.9,39.3,-75.5,28.8,-78.9,14.7C-82.2,0.6,-74.4,-17.1,-63.3,-30.9C-52.3,-44.6,-38.1,-54.5,-23.2,-64.5C-8.2,-74.5,7.6,-84.6,22.5,-83.8C37.5,-83,51.7,-71.5,43.2,-63.5Z"
            transform="translate(100 100)"
          />
        </svg>
      ),
    },
    {
      icon: MessageSquare,
      title: "Patient Communication",
      description: "Automated SMS and email notifications...",
      features: ["SMS notifications", "Email campaigns", "Appointment reminders", "Follow-up sequences"],
      gradient: "from-blue-600 to-indigo-600",
      svg: (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40">
          <path
            fill="#2563EB"
            d="M36.3,-56.2C49.3,-48.5,62.7,-39.8,69.3,-27.4C76,-15.1,76,0.9,71.3,16.3C66.5,31.8,57,46.8,43.9,55.8C30.8,64.8,15.4,67.8,-0.6,68.7C-16.6,69.7,-33.2,68.5,-45.6,59.4C-58,50.3,-66.2,33.3,-71.3,15.8C-76.4,-1.7,-78.3,-19.8,-70.4,-33.2C-62.4,-46.5,-44.6,-55,-28.1,-61.9C-11.6,-68.8,3.6,-74.1,18.5,-73.6C33.4,-73.1,48.1,-66,36.3,-56.2Z"
            transform="translate(100 100)"
          />
        </svg>
      ),
    },
    {
      icon: Shield,
      title: "HIPAA Compliance",
      description: "Enterprise-grade security with full HIPAA compliance...",
      features: ["End-to-end encryption", "HIPAA certified", "Data backup", "Audit logs"],
      gradient: "from-indigo-700 to-blue-700",
      svg: (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40">
          <path
            fill="#3730A3"
            d="M36.5,-61.1C47.7,-53.4,57.8,-45,63.7,-33.7C69.6,-22.4,71.3,-8.3,68.5,5.5C65.7,19.3,58.4,32.9,48.2,44.3C38,55.8,25,65.2,10.8,69.5C-3.4,73.7,-18.9,72.8,-33.1,66.1C-47.3,59.3,-60.2,46.7,-66.3,31.5C-72.4,16.3,-71.8,-1.5,-66.7,-17.6C-61.6,-33.7,-52,-48.1,-39.1,-56.6C-26.3,-65.1,-13.2,-67.8,-0.3,-67.3C12.7,-66.8,25.3,-63.1,36.5,-61.1Z"
            transform="translate(100 100)"
          />
        </svg>
      ),
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Works with your existing practice management software...",
      features: ["EHR integration", "API access", "Webhook support", "Custom workflows"],
      gradient: "from-cyan-500 to-blue-500",
      svg: (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40">
          <path
            fill="#0EA5E9"
            d="M47.4,-66.8C60.7,-59.2,70.5,-45.3,74.8,-30.3C79.1,-15.3,77.9,0.9,72.1,15.4C66.3,29.8,56,42.6,42.7,54.1C29.3,65.6,12.9,75.8,-3.2,79.9C-19.3,83.9,-38.7,81.8,-53.2,71.4C-67.7,61.1,-77.3,42.5,-80.1,24.2C-83,5.8,-79.1,-12.2,-71.3,-26.7C-63.6,-41.1,-52.1,-52,-38.9,-60.8C-25.8,-69.6,-12.9,-76.2,1.1,-77.8C15.1,-79.3,30.3,-75.9,47.4,-66.8Z"
            transform="translate(100 100)"
          />
        </svg>
      ),
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

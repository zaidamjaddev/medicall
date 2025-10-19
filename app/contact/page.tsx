'use client'
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ContactPage() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hello@medicall.ai",
      link: "mailto:hello@medicall.ai",
      subtitle: "We typically respond within 2 hours",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "1-800-555-1234",
      link: "tel:+18005551234",
      subtitle: "Monday - Friday, 9am - 6pm EST",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "123 Healthcare Boulevard\nSan Francisco, CA 94105",
      link: null,
      subtitle: null,
      gradient: "from-emerald-500 to-teal-500"
    }
  ]

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const blobAnimation = {
    animate: {
      scale: [1, 1.1, 1],
      x: [0, 30, 0],
      y: [0, -30, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const blob2Animation = {
    animate: {
      scale: [1, 1.2, 1],
      x: [0, -40, 0],
      y: [0, 40, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }
    }
  }

  const blob3Animation = {
    animate: {
      scale: [1, 1.15, 1],
      x: [0, 20, 0],
      y: [0, -20, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
          style={{ y }}
        />
        
        {/* Animated background blobs */}
        <motion.div 
          variants={blobAnimation}
          animate="animate"
          className="absolute top-20 left-10 w-96 h-96 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div 
          variants={blob2Animation}
          animate="animate"
          className="absolute top-40 right-10 w-96 h-96 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div 
          variants={blob3Animation}
          animate="animate"
          className="absolute bottom-10 left-1/2 w-96 h-96 bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-3xl"
        />

        <motion.div 
          className="relative max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6 leading-tight"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Have questions? Our team is here to help. Reach out and we'll get back to you as soon as possible.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-8">
                Send us a Message
              </h2>
              <motion.div 
                className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <ContactForm />
              </motion.div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-8">
                Contact Information
              </h2>

              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {contactInfo.map((info, idx) => (
                  <motion.div 
                    key={idx}
                    variants={scaleIn}
                    whileHover={{ 
                      y: -8, 
                      transition: { duration: 0.3 } 
                    }}
                    className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-500 overflow-hidden"
                  >
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-5`}
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    
                    <div className="relative flex gap-4">
                      <motion.div 
                        className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-lg`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 6,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <info.icon size={24} className="text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-slate-700 hover:text-blue-600 transition-colors font-medium block"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-slate-700 whitespace-pre-line">{info.content}</p>
                        )}
                        {info.subtitle && (
                          <p className="text-slate-500 text-sm mt-1">{info.subtitle}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quick Links */}
              <motion.div 
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="mt-8 relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl p-6 shadow-xl overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    transition: { duration: 3, repeat: Infinity }
                  }}
                />
                <motion.div 
                  className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full filter blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    transition: { duration: 4, repeat: Infinity }
                  }}
                />
                
                <div className="relative">
                  <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      { href: "/faq", text: "View FAQ" },
                      { href: "/pricing", text: "View Pricing" },
                      { href: "/services", text: "Learn About Services" }
                    ].map((link, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <a href={link.href} className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group">
                          <motion.span 
                            className="w-1.5 h-1.5 rounded-full bg-blue-400"
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          {link.text}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
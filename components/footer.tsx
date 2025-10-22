"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-[#334155] text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <motion.div variants={itemVariants}>
          <h3 className="font-bold text-lg mb-4">Smart Connect4u</h3>
          <p className="text-slate-300 text-sm">Intelligent AI call automations for healthcare professionals.</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/services" className="hover:text-white transition-colors">
                Features
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-white transition-colors">
                Team
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="pricing" className="hover:text-white transition-colors">
                Pricing
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
        <p>&copy; {new Date().getFullYear()} Smart Connect4u. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  )
}

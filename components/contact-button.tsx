"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactButton() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
      <Link href='/contact'
        
        className="bg-white text-[#06B6D4] hover:bg-[#E2E8F0] font-semibold px-4 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Schedule a Demo
      </Link>
    </motion.div>
  )
}

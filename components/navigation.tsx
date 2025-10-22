"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/team", label: "Team" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.4 },
    }),
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, staggerChildren: 0.05 },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  }

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${
        isOpen || scrolled
          ? "bg-[#1E293B]/90 backdrop-blur-xl border-b border-[#334155] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Header Container --- */}
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* --- Logo --- */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#06B6D4] to-[#0891B2] rounded-lg flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="font-bold text-lg sm:text-xl md:text-2xl text-white whitespace-nowrap">
                MediCall AI
              </span>
            </Link>
          </motion.div>

          {/* --- Desktop Links --- */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {links.map((link, i) => (
              <motion.div key={link.href} custom={i} variants={linkVariants} initial="hidden" animate="visible">
                <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                  <Link
                    href={link.href}
                    className={`text-[#E2E8F0] hover:text-[#06B6D4] transition-colors text-sm lg:text-base font-medium ${
                      link.href === "/contact" ? "text-[#06B6D4] font-semibold" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* --- CTA Button (Desktop) --- */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-gradient-to-r from-[#06B6D4] to-[#0891B2] text-white rounded-full text-sm lg:text-base font-semibold hover:from-[#0891B2] hover:to-[#0E7490] transition-all duration-300 shadow-lg hover:shadow-cyan-500/30"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <motion.button
            className="md:hidden text-[#E2E8F0] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={26} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* --- Mobile Navigation --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden py-4 space-y-2 border-t border-[#334155]"
            >
              {links.map((link) => (
                <motion.div key={link.href} variants={mobileLinkVariants}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-[#E2E8F0] hover:text-[#06B6D4] hover:bg-[#475569]/60 rounded-lg transition-colors font-medium text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={mobileLinkVariants}>
                <Link
                  href="/contact"
                  className="block mx-4 mt-3 px-4 py-3 bg-gradient-to-r from-[#06B6D4] to-[#0891B2] text-white rounded-lg text-base font-semibold hover:from-[#0891B2] hover:to-[#0E7490] transition-all text-center shadow-lg hover:shadow-cyan-500/30"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

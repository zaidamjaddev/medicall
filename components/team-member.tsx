'use client'

import Image from "next/image"
import { motion } from "framer-motion"

interface TeamMemberData {
  name: string
  role: string
  bio?: string
  image: string
  gradient?: string
}

interface TeamMemberProps {
  member: TeamMemberData
  index?: number
  darkTheme?: boolean
}

export function TeamMember({ member, index = 0, darkTheme = true }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`text-center rounded-2xl overflow-hidden border p-4 ${
        darkTheme
          ? "bg-slate-800 border-slate-700 hover:border-blue-500/50 hover:shadow-lg transition-all"
          : "bg-white border-gray-200 hover:shadow-md transition-all"
      }`}
    >
      <div className="flex justify-center mb-4">
        <div className="relative w-[280px] h-[280px] rounded-2xl overflow-hidden border border-slate-700 bg-slate-700 shadow-inner">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover"
          />
          {member.gradient && darkTheme && (
            <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20`} />
          )}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-slate-50 mb-1">{member.name}</h3>
      <p className="text-emerald-400 font-medium mb-3">{member.role}</p>
      {member.bio && <p className="text-slate-300 text-sm">{member.bio}</p>}
    </motion.div>
  )
}

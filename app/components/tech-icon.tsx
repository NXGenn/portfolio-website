"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TechIconProps {
  tech: {
    name: string
    icon: ReactNode
  }
  index: number
}

export default function TechIcon({ tech, index }: TechIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="flex flex-col items-center"
    >
      <motion.div
        className="w-24 h-24 rounded-full bg-gray-800/50 border border-yellow-400/20 flex items-center justify-center mb-4"
        whileHover={{
          boxShadow: "0 0 15px rgba(252, 211, 77, 0.5)",
          borderColor: "rgba(252, 211, 77, 0.8)",
        }}
      >
        <div className="text-yellow-400">{tech.icon}</div>
      </motion.div>
      <span className="font-medium">{tech.name}</span>
    </motion.div>
  )
}


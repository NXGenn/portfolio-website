"use client"

import { motion } from "framer-motion"

interface TimelineItemProps {
  item: {
    year: string
    title: string
    description: string
  }
  index: number
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
      className="mb-12 relative"
    >
      <div className="absolute -left-12 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-black rounded-full"></div>
      </div>

      <motion.div whileHover={{ x: 5 }} className="bg-gray-800/50 border border-yellow-400/20 p-6 rounded-lg">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-yellow-400/20 text-yellow-400 rounded-full mb-2">
          {item.year}
        </span>
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-white/70">{item.description}</p>
      </motion.div>
    </motion.div>
  )
}


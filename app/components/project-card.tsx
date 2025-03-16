"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    tags: string[]
    image: string
    link: string
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
    >
      <motion.div whileHover={{ y: -10 }} className="h-full">
        <Card className="overflow-hidden border-yellow-400/20 bg-gray-800/30 h-full">
          <div className="relative overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <a
                href={project.link}
                className="text-white flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                View Project <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-white/70 mb-4 text-sm">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="outline" className="bg-gray-700/50 text-xs border-yellow-400/20">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}


"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") !== null ||
          target.closest("a") !== null,
      )

      setIsHidden(false)
    }

    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    window.addEventListener("mousemove", updatePosition)
    document.body.addEventListener("mouseleave", handleMouseLeave)
    document.body.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  if (typeof window === "undefined") return null

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, [role="button"], [class*="cursor-pointer"] {
          cursor: none !important;
        }
      `}</style>

      <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none"
        animate={{
          x: position.x,
          y: position.y,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 350,
          opacity: { duration: 0.2 },
        }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            scale: isPointer ? 1.5 : 1,
            backgroundColor: isPointer ? "rgba(252, 211, 77, 0.5)" : "rgba(255, 255, 255, 0.2)",
          }}
          transition={{ duration: 0.2 }}
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            marginLeft: -12,
            marginTop: -12,
          }}
        >
          <motion.div
            className="absolute"
            animate={{
              width: isPointer ? 8 : 6,
              height: isPointer ? 8 : 6,
              backgroundColor: isPointer ? "#fcd34d" : "#ffffff",
            }}
            style={{
              borderRadius: "50%",
            }}
          />
        </motion.div>
      </motion.div>
    </>
  )
}


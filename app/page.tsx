"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { Github, Linkedin, Twitter, Mail, Code, Layers, Database, Server, Cpu, Zap, ChevronDown, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
//import CustomCursor from "./components/custom-cursor"
import ThreeScene from "./components/three-scene"
import ProjectCard from "./components/project-card"
import TimelineItem from "./components/timeline-item"
import TechIcon from "./components/tech-icon"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({
    hero: null,
    about: null,
    projects: null,
    skills: null,
    experience: null,
    contact: null,
  })

  // Easter egg state
  const [easterEggActive, setEasterEggActive] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      Object.entries(sectionsRef.current).forEach(([key, section]) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(key)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store built with Next.js, Tailwind CSS, and Stripe integration.",
      tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      title: "AI Dashboard",
      description: "Analytics dashboard for machine learning models with real-time data visualization.",
      tags: ["React", "D3.js", "WebSockets", "TensorFlow.js"],
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      title: "Social Media App",
      description: "Mobile-first social platform with real-time messaging and content sharing.",
      tags: ["React Native", "Firebase", "Redux", "Node.js"],
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
  ]

  const timeline = [
    {
      year: "2024",
      title: "Co-Founder & Front-End Developer  | Xora (Assignment Startup) ",
      description:
        "Built a website platform for managing and delivering academic assignments efficiently.\n" +
          "\n" + "Developed a user-friendly dashboard using Next.js and Tailwind CSS for tracking orders and submissions.",
    }
  ]

  const techStack = [
    { name: "React", icon: <Code className="h-8 w-8" /> },
    { name: "Next.js", icon: <Server className="h-8 w-8" /> },
    { name: "Tailwind CSS", icon: <Layers className="h-8 w-8" /> },
    { name: "TypeScript", icon: <Code className="h-8 w-8" /> },
    { name: "Node.js", icon: <Server className="h-8 w-8" /> },
    { name: "GraphQL", icon: <Database className="h-8 w-8" /> },
    { name: "Three.js", icon: <Cpu className="h-8 w-8" /> },
    { name: "Framer Motion", icon: <Zap className="h-8 w-8" /> },
  ]

  const triggerEasterEgg = () => {
    setEasterEggActive(true)
    setTimeout(() => setEasterEggActive(false), 3000)
  }

  if (!mounted) return null

  return (
    <>


      <AnimatePresence>
        {easterEggActive && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                rotate: [0, 15, -15, 0],
                transition: { duration: 0.6 },
              }}
              className="text-6xl font-bold text-yellow-400"
            >
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-yellow-400/20">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
                <span  className="text-2xl font-bold text-yellow-400 cursor-pointer">
                  <a  href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
                  DEV
                  </a>
                </span>
             
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, staggerChildren: 0.1 }}
                className="hidden md:flex space-x-8"
              >
                {Object.keys(sectionsRef.current).map((section) => (
                  <motion.li key={section} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                    <a
                      href={`#${section}`}
                      className={`capitalize ${activeSection === section ? "text-yellow-400" : "text-white/80 hover:text-white"}`}
                    >
                      {section}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                 <a href="https://www.youtube.com"> Resume</a>
                </Button>
              </motion.div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section
          id="hero"
          ref={(el) => (sectionsRef.current.hero = el)}
          className="h-screen flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <Canvas>
              <OrbitControls enableZoom={false} enablePan={false} />
              <ambientLight intensity={0.5} />
              <ThreeScene />
              <Environment preset="night" />
            </Canvas>
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-7xl font-bold mb-4"
              >
                <span className="text-white">Frontend</span> <span className="text-yellow-400">Developer</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-xl md:text-2xl text-white/80 mb-8"
              >
                Building exceptional digital experiences with modern web technologies
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500">View My Work</Button>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              <ChevronDown className="h-8 w-8 text-yellow-400" />
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section
          id="about"
          ref={(el) => (sectionsRef.current.about = el)}
          className="py-20 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-16 text-center"
            >
              About <span className="text-yellow-400">Me</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                <p className="text-white/80 mb-6">
                I am a front-end developer passionate about building fast, scalable, and user-friendly web applications. With expertise in React.js, Next.js, and Tailwind CSS, I create modern and responsive interfaces that enhance user experiences.
Beyond front-end development, I am the co-founder of Xora, an assignment startup that has generated ₹23,000+ in net profit, showcasing my ability to merge technology with business.
                </p>
                <p className="text-white/80 mb-6">
                  My approach combines technical expertise with creative problem-solving, allowing me to build solutions
                  that not only meet technical requirements but also provide exceptional user experiences.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                    My Journey
                  </Button>
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Contact Me</Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { title: "0", subtitle: "Years Experience" },
                  { title: "5+", subtitle: "Projects Completed" },
                  { title: "30+", subtitle: "Happy Clients" },
                  { title: "10+", subtitle: "Technologies Mastered" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="bg-gray-800/50 border border-yellow-400/20 p-6 rounded-lg text-center"
                  >
                    <h4 className="text-3xl font-bold text-yellow-400 mb-2">{item.title}</h4>
                    <p className="text-white/70">{item.subtitle}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" ref={(el) => (sectionsRef.current.projects = el)} className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-16 text-center"
            >
              My <span className="text-yellow-400">Projects</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
            >
              <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                View All Projects
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          ref={(el) => (sectionsRef.current.skills = el)}
          className="py-20 bg-gradient-to-b from-gray-900 to-black"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-16 text-center"
            >
              Tech <span className="text-yellow-400">Stack</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {techStack.map((tech, index) => (
                <TechIcon key={index} tech={tech} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Additional Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "UI/UX Design",
                  "Responsive Design",
                  "Accessibility",
                  "Git/GitHub",
                  "Agile Methodology",
                  "Technical Writing",
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <Badge variant="outline" className="px-4 py-2 text-sm border-yellow-400/50 text-white/90">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" ref={(el) => (sectionsRef.current.experience = el)} className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-16 text-center"
            >
              Work <span className="text-yellow-400">Experience</span>
            </motion.h2>

            <div className="max-w-3xl mx-auto">
              <div className="relative border-l-2 border-yellow-400/50 pl-8 ml-4">
                {timeline.map((item, index) => (
                  <TimelineItem key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={(el) => (sectionsRef.current.contact = el)}
          className="py-20 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-16 text-center"
            >
              Get In <span className="text-yellow-400">Touch</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-white/80 mb-8">
                  Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-yellow-400 mr-4" />
                    <span>abhinawk004@gmail.com</span>
                  </div>

                  <div className="flex space-x-4">
                    <motion.a href="https://github.com/NXGenn" whileHover={{ y: -5, scale: 1.1 }} className="bg-gray-800 p-3 rounded-full">
                      <Github className="h-6 w-6 text-white" />
                    </motion.a>
                    <motion.a href="https://www.linkedin.com/in/kumar-abhinaw-36b41532b/" whileHover={{ y: -5, scale: 1.1 }} className="bg-gray-800 p-3 rounded-full">
                      <Linkedin className="h-6 w-6 text-white" />
                    </motion.a>
                    <motion.a href="https://www.instagram.com/abh1.naw/" whileHover={{ y: -5, scale: 1.1 }} className="bg-gray-800 p-3 rounded-full">
                      <Instagram className="h-6 w-6 text-white" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-gray-800/50 border-yellow-400/20">
                  <CardContent className="pt-6">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            className="bg-gray-700/50 border-gray-600 focus:border-yellow-400"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            className="bg-gray-700/50 border-gray-600 focus:border-yellow-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="Subject"
                          className="bg-gray-700/50 border-gray-600 focus:border-yellow-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Your message"
                          className="bg-gray-700/50 border-gray-600 focus:border-yellow-400 min-h-[120px]"
                        />
                      </div>

                      <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-yellow-400/20 bg-black">
          <div className="container mx-auto px-4 text-center">
            <p className="text-white/60">© {new Date().getFullYear()} | Designed & Built with ❤️</p>
          </div>
        </footer>
      </div>
    </>
  )
}


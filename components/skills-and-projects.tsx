"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  Braces,
  FileCode2,
  Paintbrush2,
  Code2,
  Atom,
  Rocket,
  Wind,
  Layers,
  Scissors,
  Server,
  Box,
  Zap,
  Database,
  CircleDot,
  Grid,
  Figma,
  Code,
  Notebook,
  Eraser,
  Send,
  Package,
  Rabbit,
  Cloud,
  Globe,
  Globe2,
  BackpackIcon as BootstrapIcon,
} from "lucide-react"
import { useState, useEffect } from "react"

const iconComponents = {
  TypeScript: Braces,
  HTML: FileCode2,
  CSS: Paintbrush2,
  JavaScript: Code2,
  React: Atom,
  NextJs: Rocket,
  TailwindCSS: Wind,
  Shadcn: Layers,
  Bootstrap: BootstrapIcon,
  NodeJs: Server,
  Express: Box,
  Hono: Zap,
  Prisma: Database,
  MongoDB: CircleDot,
  Supabase: Grid,
  Figma: Figma,
  VSCode: Code,
  Notion: Notebook,
  Eraser: Eraser,
  Postman: Send,
  Npm: Package,
  Bun: Rabbit,
  Vercel: Cloud,
  Cloudflare: Globe,
  Netlify: Globe2,
}

export function SkillsAndProjects() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash === "skills" || hash === "projects") {
        setActiveSection(hash)
      } else {
        setActiveSection(null)
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    handleHashChange()

    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const skillSections = [
    {
      title: "Frontend",
      skills: [
        { name: "TypeScript", url: "https://www.typescriptlang.org/" },
        { name: "HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "React", url: "https://reactjs.org/" },
        { name: "NextJs", url: "https://nextjs.org/" },
        { name: "TailwindCSS", url: "https://tailwindcss.com/" },
        { name: "Shadcn", url: "https://ui.shadcn.com/" },
        { name: "Bootstrap", url: "https://getbootstrap.com/" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "NodeJs", url: "https://nodejs.org/" },
        { name: "Express", url: "https://expressjs.com/" },
        { name: "Hono", url: "https://hono.dev/" },
        { name: "Prisma", url: "https://www.prisma.io/" },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", url: "https://www.mongodb.com/" },
        { name: "Supabase", url: "https://supabase.io/" },
      ],
    },
    {
      title: "Tools and Platforms",
      skills: [
        { name: "Figma", url: "https://www.figma.com/" },
        { name: "VSCode", url: "https://code.visualstudio.com/" },
        { name: "Notion", url: "https://www.notion.so/" },
        { name: "Eraser", url: "https://www.eraser.io/" },
        { name: "Postman", url: "https://www.postman.com/" },
        { name: "Npm", url: "https://www.npmjs.com/" },
        { name: "Bun", url: "https://bun.sh/" },
      ],
    },
    {
      title: "Deployment",
      skills: [
        { name: "Vercel", url: "https://vercel.com/" },
        { name: "Cloudflare", url: "https://www.cloudflare.com/" },
        { name: "Netlify", url: "https://www.netlify.com/" },
      ],
    },
  ]

  const projects = [
    {
      title: "Untitled PG",
      description:
        "This React web app features a responsive design with Tailwind CSS, offering multiple pages for user interaction. It includes a Home Page with a header, form section, and optional sidebar, a Submissions Page with success messages, and an Error Page for flagged submissions. Navigation is powered by react-router-dom, with a 404 NotFound Page and dynamic URL handling.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/untitled_preview.PNG-9qoaFwDly7xrNEpuZQGc9t3F1vMgdg.png",
      github: "https://github.com/AvinashMSangle/Untitled_Pg",
      demo: "https://untitled-pg.pages.dev/",
      tags: ["React", "Tailwind CSS", "React Router"],
    },
    {
      title: "Pokedox",
      description:
        "An interactive Pokedex application showcasing detailed information about Pokemon, including their abilities, types, and stats. The website allows users to search for specific Pokemon and explore their unique attributes. It features an intuitive design for an engaging and user-friendly experience.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pokedox_preview.PNG-lIapS8fptO3ndDBUQkBCR43CFl2h5Y.png",
      github: "https://github.com/AvinashMSangle/Pokedox-bootstrap",
      demo: "https://pokedox-bootstrap.pages.dev/",
      tags: ["Bootstrap", "Pokemon API", "JavaScript"],
    },
    {
      title: "Eskemo",
      description:
        "This simple project, built with Vite and Bootstrap, fetches dog breeds and images from the Dog API, displays a carousel of images, and includes a dropdown for selecting dog breeds.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eskimo_preview.PNG-8chMtv5HMBTArx5X7a5x7VVlT71MaG.png",
      github: "https://github.com/AvinashMSangle/ESKEMO",
      demo: "https://eskemo.netlify.app/",
      tags: ["Vite", "Bootstrap", "Dog API"],
    },
    {
      title: "Booker",
      description:
        "Booker is an intuitive web app for managing bookings and appointments effortlessly. It offers a user-friendly interface, real-time scheduling, and seamless organization for businesses and individuals.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/booker_preview.PNG-f1TcD88IXB0fIjB1aVT8TAkjKbfs8b.png",
      github: "https://github.com/AvinashMSangle/Booker",
      demo: "https://bookerapp.vercel.app/",
      tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
  ]

  const sectionVariants = {
    active: { scale: 1.05, transition: { duration: 0.3 } },
    inactive: { scale: 1, transition: { duration: 0.3 } },
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div variants={sectionVariants} animate={activeSection === "skills" ? "active" : "inactive"}>
            <h2
              id="skills"
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#FFB6A3] to-[#FFA07A] dark:from-purple-500 dark:to-purple-400 bg-clip-text text-transparent"
            >
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skillSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 h-full">
                    <CardHeader>
                      <CardTitle className="bg-gradient-to-r from-[#FFB6A3] to-[#FFA07A] dark:from-purple-500 dark:to-purple-400 bg-clip-text text-transparent">
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4">
                        {section.skills.map((skill) => {
                          const IconComponent = iconComponents[skill.name as keyof typeof iconComponents]
                          return (
                            <motion.a
                              key={skill.name}
                              href={skill.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-col items-center gap-2"
                              whileHover="hover"
                            >
                              <motion.div
                                className="relative w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full"
                                variants={iconVariants}
                                initial="hidden"
                                animate="visible"
                              >
                                <IconComponent className="w-6 h-6 text-primary" />
                              </motion.div>
                              <span className="text-xs text-muted-foreground text-center">{skill.name}</span>
                            </motion.a>
                          )
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={sectionVariants} animate={activeSection === "projects" ? "active" : "inactive"}>
            <h2
              id="projects"
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#FFB6A3] to-[#FFA07A] dark:from-purple-500 dark:to-purple-400 bg-clip-text text-transparent"
            >
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#FFB6A3] to-[#FFA07A] dark:from-purple-500 dark:to-purple-400 bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="relative aspect-video w-full overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex gap-4 mt-auto">
                      <Button variant="outline" asChild className="flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button asChild className="flex-1">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


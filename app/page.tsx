import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { SkillsAndProjects } from "@/components/skills-and-projects"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16"> {/* Add top padding to account for fixed header */}
        <Hero />
        <About />
        <SkillsAndProjects />
        <Contact />
      </div>
    </main>
  )
}


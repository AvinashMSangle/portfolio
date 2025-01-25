"use client"

import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Link as ScrollLink } from "react-scroll"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const navItems = ["About", "Skills", "Projects", "Contact"]
  const [activeSection, setActiveSection] = useState("")

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.1 }} className="text-2xl font-bold border-2 p-2 rounded-lg cursor-pointer">
          <ScrollLink to="hero" smooth={true} duration={500} className="text-foreground">
            <span className="bg-gradient-to-r from-[#FFB6A3] to-[#FFA07A] dark:from-purple-500 dark:to-purple-400 bg-clip-text text-transparent">
              <span className="text-3xl">A</span>
              <span className="text-2xl">M</span>
              <span className="text-3xl">S</span>
            </span>
          </ScrollLink>
        </motion.div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  hashSpy={true}
                  className={`transition-colors cursor-pointer ${
                    activeSection === item.toLowerCase()
                      ? "bg-gradient-to-r from-[#FFB6A3] to-[#FFA07A] bg-clip-text text-transparent dark:text-purple-400"
                      : "text-muted-foreground hover:bg-gradient-to-r hover:from-[#FFB6A3] hover:to-[#FFA07A] hover:bg-clip-text hover:text-transparent dark:hover:text-purple-400"
                  }`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </ScrollLink>
              </motion.div>
            ))}
          </nav>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left bg-gradient-to-r from-[#FFB6A3] to-[#FFA07A] dark:from-purple-500 dark:to-purple-400 bg-clip-text text-transparent">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <ScrollLink
                    key={item}
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={500}
                    hashSpy={true}
                    className={`transition-colors cursor-pointer p-2 rounded-md ${
                      activeSection === item.toLowerCase()
                        ? "bg-gradient-to-r from-[#FFB6A3] to-[#FFA07A] text-white dark:from-purple-500 dark:to-purple-400"
                        : "text-muted-foreground hover:bg-secondary"
                    }`}
                    onClick={() => setActiveSection(item.toLowerCase())}
                  >
                    {item}
                  </ScrollLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}


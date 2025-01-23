"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#FFB6A3] to-[#FFA07A] dark:from-purple-500 dark:to-purple-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="border-2">
            <CardContent className="p-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am Avinash Sangle, a passionate developer with a strong foundation in web development. My journey in
                technology has equipped me with the skills to create innovative solutions and deliver meaningful user
                experiences. I take pride in writing clean, efficient code and am committed to staying up-to-date with
                the latest industry trends and best practices.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}


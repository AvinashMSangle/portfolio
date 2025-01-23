"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1bg-port.jpg-lZm57X2eWfAYqlcwwvUzq8XoPOqrWV.jpeg"
          alt="Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-background/75 backdrop-blur-md"></div>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="pr-8 md:pr-16 pb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FFB6A3] to-[#FFA07A] dark:from-purple-500 dark:to-purple-400 bg-clip-text text-transparent drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] dark:drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.8)]">
            Hi! I'm Avinash Sangle
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            A passionate web developer who transforms ideas into interactive web experiences.
          </p>
          <Button
            onClick={() =>
              window.open(
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avi_resume.PNG-Jo0yluWd71exaay0xHmkZEFQ8Fr5aj.png",
                "_blank",
              )
            }
            className="mt-4 bg-gradient-to-r from-[#FFB6A3] to-[#FFA07A] text-white hover:opacity-90 dark:from-purple-500 dark:to-purple-400"
          >
            Resume
          </Button>
        </motion.div>
        <motion.div className="flex justify-center">
          <motion.div className="relative w-[320px] h-[320px] flex items-center justify-center">
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                background: "linear-gradient(45deg, var(--primary) 0%, var(--accent) 100%)",
              }}
            >
              <div
                className="absolute inset-[3px] bg-background"
                style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                }}
              >
                <Image
                  src="https://sjc.microlink.io/qd7JuHpb6AAbQBFBOO5SNBFraPQD9pFzOgnyN_CE7YIfSI9DvBdF-1msrXkEMVUjYfCrxQFRT2bvTDo3ep3hVQ.jpeg"
                  alt="Profile"
                  fill
                  className="object-cover object-center scale-[2.9]"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


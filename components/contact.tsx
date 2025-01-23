"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for contacting me. I'll get back to you soon.",
        })
        event.currentTarget.reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#FFB6A3] to-[#FFA07A] dark:from-purple-500 dark:to-purple-400 bg-clip-text text-transparent"
        >
          Contact
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="text" name="name" placeholder="Name" required />
              <Input type="email" name="email" placeholder="Email" required />
              <Textarea name="message" placeholder="Message" required />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h3 className="text-xl font-semibold mb-4">Get in touch</h3>
            <div className="space-y-2">
              <a href="mailto:avims.7794@gmail.com" className="flex items-center hover:text-primary transition-colors">
                <Mail className="mr-2" /> avims.7794@gmail.com
              </a>
              <a href="tel:+919324691071" className="flex items-center hover:text-primary transition-colors">
                <Phone className="mr-2" /> +91 9324691071
              </a>
              <a
                href="https://github.com/AvinashMSangle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary transition-colors"
              >
                <Github className="mr-2" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/avinash-sangle-1396b1317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-primary transition-colors"
              >
                <Linkedin className="mr-2" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


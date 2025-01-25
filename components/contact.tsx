"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

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
            <form
              action="https://api.staticforms.xyz/submit"
              method="post"
              className="space-y-4"
              onSubmit={(e) => {
                setIsSubmitting(true);
                // Reset success message if it was showing
                setShowSuccess(false);
                // Handle form submission
                const form = e.target as HTMLFormElement;
                form.addEventListener("submit", () => {
                  setShowSuccess(true);
                  setIsSubmitting(false);
                  form.reset();
                });
              }}
            >
              {/* Required Static Forms fields */}
              <input
                type="hidden"
                name="accessKey"
                value="aa03051e-c60f-4fde-b57d-84b4cd2c373f" // Replace with your Static Forms access key
              />
              <input
                type="hidden"
                name="subject"
                value="New Contact Form Submission"
              />
              <input
                type="hidden"
                name="replyTo"
                value="@" // This will be replaced with the user's email
              />
              <input type="text" name="honeypot" style={{ display: "none" }} />
              <input
                type="hidden"
                name="redirectTo"
                value="https://avinash.phleebs.tech/" // Optional: Add your redirect URL after successful submission
              />

              {/* Form fields */}
              <Input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-background"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-background"
              />
              <Textarea
                name="message"
                placeholder="Message"
                required
                className="bg-background"
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-600 dark:text-green-400 text-center mt-4"
                >
                  Thank you for your submission! We will get back to you soon.
                </motion.div>
              )}
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
              <a
                href="mailto:avims.7794@gmail.com"
                className="flex items-center hover:text-primary transition-colors"
              >
                <Mail className="mr-2" /> avims.7794@gmail.com
              </a>
              <a
                href="tel:+919324691071"
                className="flex items-center hover:text-primary transition-colors"
              >
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
                href="https://www.linkedin.com/in/avinash-sangle-1396b1317"
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
  );
}

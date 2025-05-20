"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { FaTelegramPlane, FaInstagram } from "react-icons/fa"

import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="grid gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="Your message" value={formData.message} onChange={handleChange} required />
      </div>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Send Message
              <Send className="h-4 w-4" />
            </span>
          )}
        </Button>
      </motion.div>
    </motion.form>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <FadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-12 py-12 lg:grid-cols-2">
            <FadeIn direction="right" className="flex flex-col gap-6">
              <StaggerChildren className="grid gap-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">raymondjesuszamora@gmail.com</h3>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">linkedin.com/in/raymond-zamora</h3>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">github.com/McRaymond</h3>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaTelegramPlane className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">@Holigan03</h3>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaInstagram className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">@holigans._.03</h3>
                  </div>
                </div>
              </StaggerChildren>
            </FadeIn>
            <FadeIn direction="left">
              <ContactForm />
            </FadeIn>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

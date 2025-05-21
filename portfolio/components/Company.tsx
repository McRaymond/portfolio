"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { FaTelegramPlane, FaInstagram } from "react-icons/fa"

export function CompanySection() {
  const plans = [
    {
      title: "Starter",
      price: "$20",
      description: "Perfect for individuals or small teams starting their online presence.",
      features: ["10 users", "2GB of storage", "Email support"],
      missing: ["Help center access", "Phone support", "Community access"],
    },
    {
      title: "Pro",
      price: "$30",
      description: "Designed for growing teams needing more power and flexibility.",
      features: ["20 users", "5GB of storage", "Email support", "Help center access"],
      missing: ["Phone support", "Community access"],
    },
    {
      title: "Enterprise",
      price: "$100",
      description: "Advanced solution for large-scale businesses with dedicated support.",
      features: [
        "50 users",
        "20GB of storage",
        "Email support",
        "Help center access",
        "Phone support",
        "Community access",
      ],
      missing: [],
    },
  ]

  return (
    <section id="company" className="w-full py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col items-center text-center space-y-6">
        {/* Top Heading */}
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">CloudFlexIt</h2>
          <p className="text-gray-300 text-lg">
            Building reliable web experiences, tools, and infrastructure for modern creators and developers.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="w-full max-w-7xl grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-12">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="divide-y divide-gray-800 rounded-2xl border border-gray-700 bg-[#111] shadow-xs"
            >
              <div className="p-6 sm:px-8">
                <h2 className="text-lg font-medium text-white">{plan.title}</h2>
                <p className="mt-2 text-gray-300">{plan.description}</p>
                <p className="mt-4">
                  <strong className="text-3xl font-bold text-white sm:text-4xl">{plan.price}</strong>
                  <span className="text-sm font-medium text-gray-300">/month</span>
                </p>
                <a
                  className="mt-6 block rounded-sm border border-[#3b82f6] bg-[#3b82f6] px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-[#3b82f6] transition-colors"
                  href="https://t.me/Holigan03"
                >
                  Get Started
                </a>
              </div>
              <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-white sm:text-xl">What's included:</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-[#3b82f6]"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                  {plan.missing.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 text-red-500"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

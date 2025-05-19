import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
//import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Raymond Zamora | Web Developer",
  description: "Portfolio website showcasing my skills and projects as a web developer.",
}

export default function RootLayout({
  //children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        
      </body>
    </html>
  )
}

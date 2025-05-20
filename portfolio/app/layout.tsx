import "@/app/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Raymond Zamora | Web Developer",
  description: "Portfolio website showcasing my skills and projects as a web developer.",
};

// ✅ Header Component
function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col md:flex-row md:items-center h-auto py-2">
        {/* Full-width row */}
        <div className="flex w-full items-center justify-between">
          {/* Left: Logo + Desktop Nav */}
          <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2 font-bold text-[#3b82f6]">
            <img
              src="/img/CloudFlexIT.ico"
              alt="CloudFlexIT Logo"
              className="h-15 w-auto"
            />
            <span className="flex items-center space-x-2 font-bold text-[#3b82f6]">CloudFlexIt</span>
          </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">About</Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">Skills</Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">Projects</Link>
              <Link href="#company" className="transition-colors hover:text-foreground/80">Company</Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">Contact</Link>
            </nav>
          </div>

          {/* Right: Socials (Desktop only) */}
          <div className="hidden md:flex items-center gap-2">
            <SocialLinks />
          </div>

          {/* Mobile Menu (Burger + Dropdown) */}
          <div className="md:hidden flex">
            <details className="relative">
              <summary className="list-none cursor-pointer">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </summary>
              <div className="absolute right-0 mt-2 w-48 rounded-md border bg-background shadow-lg z-50 p-4 space-y-2">
                <nav className="flex flex-col space-y-2 text-sm font-medium">
                  <Link href="#about" className="hover:text-foreground/80">About</Link>
                  <Link href="#skills" className="hover:text-foreground/80">Skills</Link>
                  <Link href="#projects" className="hover:text-foreground/80">Projects</Link>
                  <Link href="#company" className="hover:text-foreground/80">Company</Link>
                  <Link href="#contact" className="hover:text-foreground/80">Contact</Link>
                </nav>
                <div className="flex gap-2 pt-2 border-t">
                  <SocialLinks />
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
}

// ✅ Footer Component
function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-gray-500 md:text-left dark:text-gray-400">
          © 2024 CloudFlexIt. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

// ✅ Social Links (used in header and footer)
function SocialLinks() {
  return (
    <>
      <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon">
          <Github className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </Button>
      </Link>
      <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </Button>
      </Link>
      <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
        <Button variant="ghost" size="icon">
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Twitter</span>
        </Button>
      </Link>
    </>
  );
}

// ✅ Root Layout
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

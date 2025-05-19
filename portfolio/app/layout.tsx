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
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 font-bold">
            <span className="text-[#3b82f6]">CloudFlexIt</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80">About</Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80">Skills</Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80">Projects</Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">Contact</Link>
            <Link href="#company" className="transition-colors hover:text-foreground/80">Company</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <nav className="flex items-center justify-between md:hidden">
              <Link href="/" className="flex items-center space-x-2 font-bold">
                <span>Raymond</span>
              </Link>
              <Button variant="ghost" size="icon">
                <span className="sr-only">Toggle menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </nav>
          </div>
          <div className="flex items-center gap-2 ml-auto">
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
        </div>
      </div>
    </footer>
  );
}

// ✅ Root Layout with Inline Header/Footer
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

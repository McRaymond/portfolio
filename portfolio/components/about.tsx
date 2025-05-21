"use client"

import { FadeIn } from "@/components/animations/fade-in"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-32">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        {/* Heading and Intro */}
        <FadeIn className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-white">About Me</h2>
          <p className="mt-4 max-w-2xl text-gray-400 md:text-xl">
            Aspiring cybersecurity and IT professional with hands-on experience in networking, ethical hacking, and server administration. Skilled in building and managing personal servers, including hosting cloud and media services. Completed practical labs such as Hack The Box and HackThisSite, and studied networking and cybersecurity at the college level. Quick to learn new technologies and passionate about solving real-world security challenges.
          </p>
        </FadeIn>

        {/* Timeline */}
        <ol className="relative mt-20 space-y-12 before:absolute before:inset-y-0 before:left-1/2 before:w-0.5 before:-translate-x-1/2 before:bg-gray-700">
          {/* Education */}
          <li className="group relative grid grid-cols-2 odd:-me-4 even:-ms-4">
            <div className="relative flex items-start gap-4 flex-row-reverse text-right">
              <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-[#3b82f6]"></span>
              <div>
                <time className="text-xs font-medium text-gray-400">2022–2025</time>
                <h3 className="text-lg font-bold text-white">Education</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Bachelor’s Degree in Computer Science, Miami Dade College
                </p>
              </div>
            </div>
            <div aria-hidden="true"></div>
          </li>

          {/* Experience */}
          <li className="group relative grid grid-cols-2 odd:-me-4 even:-ms-4">
            <div className="relative flex items-start gap-4 order-last text-left">
              <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-[#3b82f6]"></span>
              <div>
                <time className="text-xs font-medium text-gray-400">2022–Present</time>
                <h3 className="text-lg font-bold text-white">Experience</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Freelance IT & Web Projects – Self-Employed
                </p>
              </div>
            </div>
            <div aria-hidden="true"></div>
          </li>

          {/* Interests */}
          <li className="group relative grid grid-cols-2 odd:-me-4 even:-ms-4">
            <div className="relative flex items-start gap-4 flex-row-reverse text-right">
              <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-[#3b82f6]"></span>
              <div>
                <time className="text-xs font-medium text-gray-400">Ongoing</time>
                <h3 className="text-lg font-bold text-white">Interests</h3>
                <p className="mt-1 text-sm text-gray-400">
                  Passionate about cybersecurity, I spend time exploring ethical hacking tools, testing network setups, and learning about emerging threats. 
        I also enjoy customizing Linux environments, playing CTFs, and staying updated with infosec communities. Outside of tech, I like gaming, listening to music, and reading about psychology and tech policy.
                </p>
              </div>
            </div>
            <div aria-hidden="true"></div>
          </li>
        </ol>
      </div>
    </section>
  )
}

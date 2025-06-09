"use client";

import { Navbar } from "@/components/ui/navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";
import Image from "next/image";

export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto pt-32 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-3">My Experience</h2>
          <p className="text-white/60 mb-2">
            I'm a Data Analyst and BI Developer with 3+ years of experience working with SQL, Python, Power BI, Tableau, 
            and cloud tools like AWS to drive actionable insights, build automated pipelines, and enable strategic decisions.
          </p>

          {/* Work Links */}
          <div className="mt-10">
            <h2 className="text-xl md:text-xl font-medium mb-3">Follow My Work Here</h2>
            <ul className="flex space-x-6 items-center mb-6">
              <li className="relative group flex justify-center">
                <a
                  href="https://github.com/Saivarun4440/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    width={40}
                    height={40}
                    src="/uploads/GitHubIcon.png"
                    alt="GitHub Icon"
                    className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                  <span className="absolute bottom-[-2.1rem] text-xs text-white bg-gray-800 px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    Click me!
                  </span>
                </a>
              </li>
              <li className="relative group flex justify-center">
                <a
                  href="https://www.linkedin.com/in/saivarun-gandla/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    width={40}
                    height={40}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn Icon"
                    className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                  <span className="absolute bottom-[-2.1rem] text-xs text-white bg-gray-800 px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    Click me!
                  </span>
                </a>
              </li>
            </ul>

            {/* Resume Download Link */}
            <div className="flex justify-start mb-6">
              <a
                href="/uploads/myDocument.pdf"
                download
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                Download PDF
                <Download size={20} />
              </a>
            </div>
          </div>

          {/* Resume Images Section */}
          <div className="grid gap-8 mb-12">
            <Image
              src="/uploads/resume-page1.png"
              alt="Resume Page 1"
              width={1200}
              height={1600}
              className="rounded-xl w-full"
            />
            <Image
              src="/uploads/resume-page2.png"
              alt="Resume Page 2"
              width={1200}
              height={1600}
              className="rounded-xl w-full"
            />
          </div>

          {/* Back Link */}
          <div className="border-t border-white/10 pt-8 mb-20">
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-white/70 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Portfolio
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

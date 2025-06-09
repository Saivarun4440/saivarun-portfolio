"use client";

import { Navbar } from "@/components/ui/navbar";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutMeImage = "/uploads/AboutMeImage.jpeg";

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-6xl font-medium mb-16">Welcome!</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* IMAGE — appears below text on mobile, right on desktop */}
            <div className="order-1 md:order-2">
              <Image src={AboutMeImage} alt="About Me" className="rounded-xl" width={400} height={400} />
            </div>

            {/* TEXT — appears first on mobile */}
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-medium mb-6">
                Hey there! I'm Saivarun Gandla — Data Analyst & BI Specialist
              </h2>
              <p className="text-white/80 mb-4">
                I'm a <span className="font-semibold italic">data-driven analyst</span> with 3+ years of experience
                turning business data into actionable insights. I specialize in
                <span className="font-semibold italic"> SQL, Python, and Power BI</span>, and love creating scalable ETL
                pipelines using <span className="font-semibold italic">AWS Glue and Lambda</span>.
              </p>
              <p className="text-white/80 mb-4">
                My passion lies in building <span className="font-semibold italic">insightful dashboards</span>,
                optimizing reporting workflows, and enabling teams to make better, faster decisions.
                Whether it's structuring raw data or visualizing trends, I bring clarity through analytics.
              </p>
              <p className="text-white/80 mb-4">
                I'm always looking for new challenges that push my skills in
                <span className="font-semibold italic"> business intelligence and data engineering</span>.
                If you're looking for a collaborative analyst who can bridge
                data and strategy — <span className="font-semibold italic">let's connect!</span>
              </p>

              <div className="mt-10">
                <h3 className="text-2xl font-medium mb-6">Follow My Work Here</h3>
                <ul className="flex space-x-6 items-center">
                  <li className="relative group flex justify-center">
                    <a href="https://github.com/Saivarun4440/" target="_blank" rel="noopener noreferrer">
                      <img
                        className="w-[50px] h-[50px] transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                        src="/uploads/GitHubIcon.png"
                        alt="GitHub Icon"
                      />
                      <span className="absolute bottom-[-2.1rem] text-xs text-white bg-gray-800 px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                        Click me!
                      </span>
                    </a>
                  </li>
                  <li className="relative group flex justify-center">
                    <a href="https://www.linkedin.com/in/saivarun-gandla/" target="_blank" rel="noopener noreferrer">
                      <img
                        className="w-[50px] h-[50px] transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                        alt="LinkedIn Icon"
                      />
                      <span className="absolute bottom-[-2.1rem] text-xs text-white bg-gray-800 px-3 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                        Click me!
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SKILLS SECTION */}
          <div className="mb-20">
            <h2 className="text-2xl font-medium mb-6">Skills</h2>
            <ul className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-5">
              {[
                { name: "Python", icon: "python/python-original-wordmark.svg" },
                { name: "SQL", icon: "mysql/mysql-original-wordmark.svg" },
                { name: "Power BI", icon: "/uploads/powerbi.png" },
                { name: "Tableau", icon: "/uploads/tableau.png" },
                { name: "AWS", icon: "/uploads/aws.png" },
                { name: "ETL", icon: "/uploads/etl.png" },
                { name: "Excel", icon: "/uploads/excel.png" },
                { name: "Git", icon: "git/git-original-wordmark.svg" },
              ].map(({ name, icon }, i) => (
                <li key={i} className="relative group flex justify-center">
                  <img
                    className="w-[50px] h-[50px] transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                    src={
                      icon.startsWith("/uploads/")
                        ? icon
                        : `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`
                    }
                    alt={`${name} Icon`}
                  />
                  <span className="absolute bottom-[-1.5rem] text-xs text-white bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

"use client";

import { Navbar } from "../../../components/ui/navbar";
import { projectsInfo } from "../../../data/projectsInfo";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function Project1Page() {
  // Replace 'project-1' with the slug/title of your first project, e.g., "Automotive Visualization Dashboard"
  const project = projectsInfo[0];

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
          <h1 className="text-4xl md:text-6xl font-medium mb-8">{project.title}</h1>
          <p className="text-white/60 mb-4">{project.description}</p>

          {/* Project Image */}
          <div className="rounded-xl overflow-hidden mb-10">
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={600}
              className="rounded-xl w-full h-auto"
            />
          </div>

          {/* GitHub and Live Links */}
          <div className="flex space-x-6 mb-10">
            <a
              href={project.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              GitHub Repo
            </a>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-700 font-medium"
              >
                Live Demo
              </a>
            )}
          </div>

          {/* Skills */}
          <div className="mb-10">
            <h2 className="text-2xl font-medium mb-4">Tech Stack:</h2>
            <ul className="flex flex-wrap gap-3">
              {project.skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="bg-gray-800 px-3 py-1 rounded text-sm text-white"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Back Link */}
          <div className="border-t border-white/10 pt-8 mb-20">
            <Link
              href="/projects"
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
              Back to Projects
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

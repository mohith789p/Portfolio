"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Code, Globe, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInViewAnimation } from "@/hooks/use-in-view-animation";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  details: string;
};

const projects: Project[] = [
  {
    id: "project-1",
    title: "MediaGrid",
    description:
      "A modern social media platform built with Next.js and Tailwind CSS.",
    image: "/mediagrid.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Hugging Face"],
    liveUrl: "https://mediagrid.vercel.app",
    githubUrl: "https://github.com/mohith789p/mediagrid/tree/main/mediagrid",
    details:
      "This social media platform features a responsive design, user authentication, post creation, commenting, and liking. Users can also follow other users and view their feeds. The app uses Firebase for authentication, database, and storage.",
  },
  {
    id: "project-2",
    title: "Code Review",
    description:
      "An AI-powered code review tool that evaluates snippets and suggests improvements.",
    image: "/codereview.png",
    tags: [
      "Express js",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Hugging Face",
    ],
    liveUrl: "https://code-review-one.vercel.app/",
    githubUrl: "https://github.com/mohith789p/Code-Assistant",
    details:
      "AI analyzes code for correctness, efficiency, and readability, provides improvement suggestions with justifications, and gives an overall rating.",
  },
  {
    id: "project-3",
    title: "Teacher Assistant",
    description:
      "An AI-powered teacher assistant that helps students with their queries and assignments.",
    image: "/teacherassistant.png",
    tags: [
      "Express js",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Hugging Face",
    ],
    liveUrl: "https://teacher-assistant-one.vercel.app/",
    githubUrl: "https://github.com/mohith789p/Teacher-Assistant",
    details:
      "This teacher assistant features a responsive design, user authentication, and a chat interface. Users can ask questions and get instant responses. The app uses Next.js for the frontend, and Firebase for authentication and database.",
  },
  {
    id: "project-4",
    title: "Book Search",
    description:
      "A book search application with book details and recommendations.",
    image: "/booksearch.png",
    tags: ["HTML", "CSS", "EJS"],
    liveUrl: "https://book-search-puce.vercel.app/",
    githubUrl: "https://github.com/mohith789p/book-search",
    details:
      "This book search application allows users to search for books using the Open Library API. Users can view book details, including cover images, author, and publication year. The app also provides a recommendations section based on user search history.",
  },
  {
    id: "project-5",
    title: "Sky Watcher Bot",
    description: "A Telegram bot that provides real-time weather updates.",
    image: "/skywatcher.png",
    tags: ["Node.js", "Telegram API", "Open-Meteo API", "Firebase"],
    liveUrl: "https://weather-bot-q8fl.onrender.com",
    githubUrl:
      "https://github.com/mohith789p/Telegram-Bot/tree/main/Weather%20Bot",
    details:
      "This Telegram bot fetches weather information for any city and delivers it directly in chat.",
  },
  {
    id: "project-6",
    title: "GenPic Bot",
    description: "A Telegram bot that generates pictures by user prompts.",
    image: "/genpic.png",
    tags: ["Node.js", "Telegram API", "Pollinations API", "Firebase"],
    liveUrl: "https://genpic-bot.onrender.com",
    githubUrl:
      "https://github.com/mohith789p/Telegram-Bot/tree/main/PicGeneration%20Bot",
    details: "This Telegram bot generates pictures based on user prompts.",
  },
  {
    id: "project-7",
    title: "Checklist Bot",
    description: "A Telegram bot that helps users manage checklists and tasks.",
    image: "/checklist.png",
    tags: ["Node.js", "Telegram API", "Firebase"],
    liveUrl: "https://checklist-bot-tpib.onrender.com",
    githubUrl:
      "https://github.com/mohith789p/Telegram-Bot/tree/main/Checklist%20Bot",
    details:
      "This Telegram bot allows users to create, update, and manage checklists directly within Telegram.",
  },
  {
    id: "project-8",
    title: "Track my Train Bot",
    description: "A Telegram bot that provides live train status updates.",
    image: "/trackmytrain.png",
    tags: ["Node.js", "Telegram API", "Indian Railway API"],
    liveUrl: "https://trainlivestatus-bot.onrender.com",
    githubUrl:
      "https://github.com/mohith789p/Telegram-Bot/tree/main/TrainStatus%20Bot",
    details:
      "This Telegram bot provides real-time train running status and updates.",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, controls } = useInViewAnimation({
    threshold: 0.2,
  });

  const uniqueTags = [
    "All",
    ...Array.from(new Set(projects.flatMap((project) => project.tags))),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section className="container mx-auto px-4 py-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          A selection of my recent work, personal projects, and client
          collaborations.
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {uniqueTags.map((tag, index) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <Button
              variant={activeFilter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(tag)}
              className="rounded-full"
            >
              {tag}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <div className="relative h-40 md:h-48 w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={`${project.id}-${tag}`}
                    className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details
                </Button>

                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                    >
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}

                  {project.liveUrl && (
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-card w-full max-w-3xl rounded-lg shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm rounded-full"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={`modal-${selectedProject.id}-${tag}`}
                      className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-card-foreground mb-6">
                  {selectedProject.details}
                </p>

                <div className="flex flex-wrap gap-4">
                  {selectedProject.githubUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <Link
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </Link>
                    </Button>
                  )}

                  {selectedProject.liveUrl && (
                    <Button asChild size="sm" className="gap-2">
                      <Link
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

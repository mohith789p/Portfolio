"use client";

import { motion } from "framer-motion";

type Skill = {
  name: string;
  icon: string;
  description?: string; // optional brief note
  color?: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "Tailwind CSS",
        icon: "🎨",
        description: "Utility-first styling",
      },
      { name: "React", icon: "⚛️", description: "Building dynamic UIs" },
      {
        name: "Next.js",
        icon: "▲",
        description: "Server-side rendering & routing",
      },
      { name: "TypeScript", icon: "📘", description: "Type-safe JavaScript" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      {
        name: "Node.js",
        icon: "🟢",
        description: "JavaScript runtime environment",
      },
      {
        name: "Express js",
        icon: "🚂",
        description: "Web application framework",
      },
      { name: "Firebase", icon: "🔥", description: "Auth & Realtime Database" },
    ],
  },
  {
    title: "AI & Embedded",
    skills: [
      {
        name: "Arduino (C/C++)",
        icon: "🔌",
        description: "Microcontroller programming",
      },
      { name: "Raspberry Pi", icon: "🍓", description: "Embedded computing" },
      {
        name: "NVIDIA Jetson Nano",
        icon: "🖥️",
        description: "AI acceleration",
      },
      { name: "Python", icon: "🐍", description: "AI & scripting" },
      { name: "OpenCV", icon: "📷", description: "Computer vision projects" },
    ],
  },
  {
    title: "Data Science & AI",
    skills: [
      {
        name: "Python",
        icon: "🐍",
        description: "Programming for AI & data analysis",
      },
      { name: "NumPy", icon: "🔢", description: "Numerical computing" },
      {
        name: "Pandas",
        icon: "🐼",
        description: "Data manipulation & analysis",
      },
      { name: "Matplotlib", icon: "📊", description: "Data visualization" },
      {
        name: "Seaborn",
        icon: "🌊",
        description: "Statistical plotting & visualization",
      },
      { name: "OpenCV", icon: "📷", description: "Computer vision projects" },
      {
        name: "Hugging Face",
        icon: "🤗",
        description: "Running AI/ML models via APIs",
      },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: "📊", description: "Version control" },
      {
        name: "GitHub",
        icon: "🐙",
        description: "Code hosting & collaboration",
      },
      {
        name: "Hugging Face",
        icon: "🤗",
        description: "Running AI/ML models via APIs",
      },
      {
        name: "Google Colab",
        icon: "☁️",
        description: "Cloud-based Python notebooks",
      },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          A showcase of my technical expertise across software development, AI,
          and embedded systems.
        </p>
      </motion.div>

      <div className="space-y-12 md:space-y-16">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center md:text-left">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full hover:bg-secondary/40 transition-colors"
                >
                  <span className="text-lg md:text-xl">{skill.icon}</span>
                  <span className="font-medium text-sm md:text-base">
                    {skill.name}
                  </span>
                  {skill.description && (
                    <span className="text-xs md:text-sm text-muted-foreground">
                      - {skill.description}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

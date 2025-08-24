"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, Briefcase, Award } from "lucide-react";
import { useInViewAnimation } from "@/hooks/use-in-view-animation";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const timelineItems: TimelineItem[] = [
  {
    year: "2025",
    title: "Java Full-Stack Development Virtual Internship",
    description:
      "Learned and implemented full-stack development using Java, building web applications and APIs.",
    icon: Briefcase,
  },
  {
  year: "2025",
  title: "AI & ML Virtual Internship",
  description:
    "Gained hands-on experience in AI and machine learning concepts, working on practical projects to enhance algorithmic understanding.",
  icon: Briefcase,
},
{
  year: "2024",
  title: "Android Development Virtual Internship",
  description:
    "Developed Android applications, gaining practical experience in mobile app development and UI/UX design principles.",
  icon: Briefcase,
},
{
  year: "2023",
  title: "Bachelor of Computer Science",
  description:
    "Started Bachelor’s program (2023–2027 batch), focusing on software development, Python, and AI fundamentals.",
  icon: GraduationCap,
},

];

export default function AboutSection() {
  const { ref: sectionRef, controls: sectionControls } = useInViewAnimation({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    threshold: 0.2,
  });

  const { ref: imageRef, controls: imageControls } = useInViewAnimation({
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    threshold: 0.2,
  });

  const { ref: timelineRef, controls: timelineControls } = useInViewAnimation({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    threshold: 0.2,
  });

  return (
    <section className="container mx-auto px-4 py-16" ref={sectionRef}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={sectionControls}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get to know more about my journey, experience, and what drives me as a
          developer.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image and Bio */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -50 }}
          animate={imageControls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="relative w-48 h-48 mx-auto lg:mx-0 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Potnuru Mohith</h3>
            <p className="text-primary font-medium mb-4">
              Frontend Developer & AI Enthusiast
            </p>
            <p className="text-muted-foreground">
              Motivated Computer Science student with strong skills in full-stack development using Next.js, Express.js, and Firebase. Experienced in building web applications and integrating AI features. Passionate about learning AI and Gen AI, with a goal to apply modern technologies to create intelligent, impactful, and scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <h4 className="font-medium mb-2">Phone</h4>
              <p className="text-muted-foreground">+91 8519904179</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Email</h4>
              <p className="text-muted-foreground">mohith321p@gmail.com</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Availability</h4>
              <p className="text-muted-foreground">Open to Opportunities</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Location</h4>
              <p className="text-muted-foreground">Bhimavaram, India</p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={timelineRef}
          initial={{ opacity: 0, y: 50 }}
          animate={timelineControls}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 p-2 rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="glass p-5 rounded-lg">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary/50 rounded-full mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

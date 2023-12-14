import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import gitpng from "@/public/git.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduate Student, California State University - Chico",
    location: "Chico, California",
    description:
      "Currently enrolled in California State University - Chico and pursuing my Masters in Computer Science.",
    icon: React.createElement(FaReact),
    date: "Aug. 2023 - May. 2025",
  },
  {
    title: "Senior Software Engineer, Chargebee Inc",
    location: "Chennai, India",
    description:
      "Worked as a Senior Software Engineer at Chargebee before leaving to United States to pursue my Masters.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Software Engineer, Chargebee Inc",
    location: "Chennai, India",
    description:
      "Worked as a Full stack software engineer for Chargebee for 2.5 years and got promoted to Senior Software Engineer.",
    icon: React.createElement(FaReact),
    date: "2019 - 2022",
  },
  {
    title: "Intern, Guvi Geeks IIT Madras",
    location: "Chennai, India",
    description:
      "I worked as a front-end developer for 3 months. Got to learn MERN stack and build full stack web applications.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Anna University, B.E",
    location: "Chennai, India",
    description:
      "Did my Undergraduate from Anna University in Electronics & Communication Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "airbnc",
    description:
      "An hostel booking web application. It has features like selecting the dorm and beds specifically, hosting the hostel, rating the hostel, managing the bookings.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Express.js", "Vite"],
    imageUrl: gitpng,
    projectUrl: "https://github.com/dhirajdkv/airbnc",
  },
  {
    title: "strike.it",
    description:
      "A Check list app for software developers with customisable and interactive UI. It has features like categorising based on the priority and priority view.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux", "Node.js"],
    imageUrl: gitpng,
    projectUrl: "https://github.com/dhirajdkv/strike-it",
  },
  {
    title: "groupee",
    description:
      "A web app for quick chat with friends. It supports Direct messages, Group messages, Image sharing and Read-recipients.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "chatengine.io"],
    imageUrl: gitpng,
    projectUrl: "https://github.com/dhirajdkv/whatsup-app",
  },
] as const;

// export const skillsData = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Git",
//   "Tailwind",
//   "Prisma",
//   "MongoDB",
//   "Redux",
//   "GraphQL",
//   "Apollo",
//   "Express",
//   "PostgreSQL",
//   "Python",
//   "Django",
//   "Framer Motion",
// ] as const;

export const skillsData = [
  "Java",
  "Python",
  "C++",
  "React.js",
  "Vuejs",
  "Node.js",
  "Express.js",
  "SQL",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "TailwindCSS",
  "JUnit",
  "Jest",
  "jQuery",
  "Git/GitHub",
  "AWS Cloud",
  "Salesforce",
] as const;

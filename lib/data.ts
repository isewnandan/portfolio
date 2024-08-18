import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { RiSchoolLine } from "react-icons/ri"

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
    title: "Graduated MBO 4",
    location: "Grafisch Lyceum, Rotterdam",
    description:
      "I graduated after 3 years of studying. I immediately started expanding my web development skills",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Rotterdam",
    description:
      "I worked as a freelancer for 1 year to expend my coding skills and I also worked full-time at 'VanGelder Groenten en Fruit' as a controlroom employee. There, I worked with the programs WMS and Astro.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Rotterdam",
    description:
      "I am currently expanding my skills to become a full-stack developer by making projects and following courses",
    icon: React.createElement(FaReact),
    date: "2020 - present",
  },
  {
    title: "Student Data Analyst",
    location: "Hogeschool Rotterdam",
    description:
      "I am a student at Hogeschool Rotterdam, pursuing a full-time associate degree in Data Analysis, and I am open to work-study opportunities",
    icon: React.createElement(RiSchoolLine),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked on this project to further develop my skills. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "PHP",
  "PowerBI",
  "Numphy",
  "Python",
  "Framer Motion",
  "Pandas",
] as const;
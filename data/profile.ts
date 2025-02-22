import { passport } from "@/src/assets";
import { StaticImageData } from "next/image";

export interface Contact {
  email: string;
  phone: string;
  address: string;
  twitter: string;
}

export interface Skill {
  name: string;
}

export interface Education {
  year: number;
  degree: string;
  institution: string;
  percentage?: number;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  name: string;
  description: string;
}

export interface Profile {
  name: string;
  role: string;
  profileImage: StaticImageData;
  about: string;
  contact: Contact;
  skills: Skill[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
}

export const profile: Profile = {
  name: "Ahmad Yakubu Ahmad",
  role: "Software Engineer",
  profileImage: passport,
  about:
    "Passionate Software Engineer with a strong background in designing scalable web applications, AI-driven solutions, and cloud-native systems. With a proven track record at top tech companies, I specialize in building high-performance, user-centric software that drives innovation. Constantly pushing boundaries in AI, full-stack development, and system architecture.",

  contact: {
    email: "engrahmadaya@gmail.com",
    phone: "+1 (650) 555-1234",
    address: "San Francisco, CA, USA",
    twitter: "engrahmadaya21",
  },

  skills: [
    { name: "React.js" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "TypeScript" },
    { name: "Python" },
    { name: "GraphQL" },
    { name: "MongoDB" },
    { name: "SQL" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "AWS" },
    { name: "Machine Learning" },
  ],

  education: [
    {
      year: 2025,
      degree: "Ph.D. in Software Engineering",
      institution: "Harvard University",
    },
    {
      year: 2021,
      degree: "Masters in Computer Engineering",
      institution: "Massachusetts Institute of Technology (MIT)",
    },
    {
      year: 2019,
      degree: "Bachelor of Science in Software Engineering",
      institution: "Stanford University",
    },
  ],

  experience: [
    {
      company: "Google",
      role: "Senior Software Engineer",
      duration: "2023 - Present",
      responsibilities: [
        "Developing large-scale AI-powered search systems",
        "Leading a team on high-traffic web applications",
        "Improving system performance by 30% through efficient data processing",
      ],
    },
    {
      company: "Meta",
      role: "Software Engineer II",
      duration: "2021 - 2023",
      responsibilities: [
        "Built scalable GraphQL APIs for Meta's social platforms",
        "Optimized real-time data pipelines to handle 100M+ users",
        "Implemented AI-driven recommendation systems",
      ],
    },
    {
      company: "Netflix",
      role: "Full Stack Engineer",
      duration: "2020 - 2021",
      responsibilities: [
        "Redesigned the video streaming UI for better user experience",
        "Developed microservices for personalized content delivery",
        "Worked on React-based frontend and Node.js backend",
      ],
    },
    {
      company: "Amazon",
      role: "Software Engineer Intern",
      duration: "2019 - 2020",
      responsibilities: [
        "Developed an automation tool reducing deployment time by 40%",
        "Implemented AWS Lambda functions for serverless processing",
        "Improved backend performance for e-commerce search",
      ],
    },
  ],

  projects: [
    {
      name: "AI Resume Analyzer",
      description:
        "An AI-powered resume analysis tool that evaluates a candidate's fit for job postings using NLP and machine learning.",
    },
    {
      name: "Real-time Collaboration Platform",
      description:
        "Built a web-based collaboration tool similar to Google Docs, enabling real-time document editing using WebSockets.",
    },
    {
      name: "E-commerce Personalization Engine",
      description:
        "Developed an AI-based recommendation system that increased user engagement by 35% in an online marketplace.",
    },
    {
      name: "DevOps Automation Dashboard",
      description:
        "Designed a cloud-based dashboard to monitor, deploy, and manage containerized applications across Kubernetes clusters.",
    },
    {
      name: "Stock Market Prediction Model",
      description:
        "Built a deep learning model using LSTMs to forecast stock trends with high accuracy.",
    },
  ],
};

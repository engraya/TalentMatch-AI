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
    percentage: number;
  }
  
  export interface Experience {
    company: string;
    role: string;
    duration: string;
    responsibilities: string[];
    position?: string;
    years?: string;
  }
  
  export interface Project {
    name: string;
    description: string;
    title? : string;
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
    name: "Amit Pachange",
    role: "Software Engineer",
    profileImage: passport,
    about:
      "To get a career opportunity which would help me to utilize my academic background to assist me to gain experience, employ my excellent skills, and enable me to make a positive contribution.",
    contact: {
      email: "amitpachange@gmail.com",
      phone: "4574358775",
      address: "Sale Galli, Latur",
      twitter: "amitpachange21",
    },
    skills: [
      { name: "Tailwind CSS" },
      { name: "Java" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "SQL" },
      { name: "Docker" },
    ],
    education: [
      {
        year: 2021,
        degree: "B.E. (Information Technology)",
        institution: "Pimpri Chinchwad College of Engineering, Pune",
        percentage: 76.61,
      },
      {
        year: 2017,
        degree: "HSC",
        institution: "Rajarshi Shahu College, Latur",
        percentage: 80.77,
      },
      {
        year: 2015,
        degree: "SSC",
        institution: "Dnyaneshwar High School, Latur",
        percentage: 93.8,
      },
    ],
    experience: [
      {
        company: "Netcracker Technology",
        role: "Software Engineer",
        duration: "2021 - Present",
        responsibilities: [
          "Working on customer-facing product",
          "Delivering highly efficient solutions",
          "Solving critical bugs",
        ],
      },
      {
        company: "TailwindFlex.com",
        role: "Lead",
        duration: "2020 - 2021",
        responsibilities: [
          "Developed reusable components",
          "Solving complex problems",
          "Solving critical bugs",
        ],
      },
    ],
    projects: [
      {
        name: "Used Books Mobile App",
        description:
          "A platform to sell as well as buy used books only for PCCoE College, encouraging book reuse and increasing communication between juniors and seniors.",
      },
      {
        name: "Parking Automation System",
        description:
          "A web application that helps users book their car parking slots online, similar to booking movie tickets.",
      },
    ],
  };
  
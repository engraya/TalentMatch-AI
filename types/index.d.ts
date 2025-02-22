export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mailSupport: string;
  links: {
    portfolio: string;
    github: string;
  };
};

export type NavItem = {
  title: string;
  href: string;
  badge?: number;
  disabled?: boolean;
  external?: boolean;
  authorizeOnly?: UserRole;
  icon?: keyof typeof Icons;
};

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

export interface Job {
  id: number;
  title: string;
  company: string;
  salary: string;
  location: string;
  requiredSkills: string[];
}

export type JobType = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  requiredSkills: string[];
  matchScore: number;
};

export interface ProfileState {
    skills: string[];
    appliedJobs: Job[];
    applyForJob: (job: Job) => void;
  }

export type HeaderProps = {
    setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
    showSideBar: boolean;
  };

export type JobCardProps = {
    job: JobType;
  };

export type SideBarProps = {
    showSideBar: boolean;
    setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  };






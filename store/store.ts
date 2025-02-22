import { create } from "zustand";

interface ProfileState {
  skills: string[];
}

export const useProfileStore = create<ProfileState>(() => ({
  skills: [
    "Tailwind CSS",
    "Java",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "MongoDB",
    "SQL",
    "Docker",
  ],
}));

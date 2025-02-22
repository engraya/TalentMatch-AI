import { create } from "zustand";
import { ProfileState } from "@/types";
  

  export const useProfileStore = create<ProfileState>((set) => ({
    skills: [
        "Tailwind CSS",
        "Nextjs",
        "Phython",
        "Django",
        "GraphQL",
        "PostgreSQL",
        "Java",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Node.js",
        "MongoDB",
        "SQL",
        "Docker",
        "Kubernetes",
        "AWS",
        "Machine Learning",
        "Artificial Intelligence",
        "Scrum",
        "Agile",
        "CI/CD",
        "Express.js",
        "AI Programming"
      ],
    appliedJobs: [],
    applyForJob: (job) =>
      set((state) => {
        if (!state.appliedJobs.some((appliedJob) => appliedJob.id === job.id)) {
          return { appliedJobs: [...state.appliedJobs, job] };
        }
        return state;
      }),
  }));



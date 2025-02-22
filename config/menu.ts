import { profile, jobs, applications } from "@/src/assets";

export const menuList = [
    {
      name: "Jobs",
      icon: jobs,
      path: "/dashboard",
    },
    {
      name: "My Profile",
      icon: profile,
      path: "/dashboard/profile",
    },
    {
      name: "My Applications",
      icon: applications,
      path: "/dashboard/applications",
    }
  ];
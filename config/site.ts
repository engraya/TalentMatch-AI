import {SiteConfig } from "@/types";

const site_url = "https://twitter.com/egraya";

export const siteConfig: SiteConfig = {
  name: "TalentMatchAI",
  description:
    "Let TalentMatchAI analyze your skills and match you with jobs that fit you best. No more endless searching—just AI-powered career success!",
  url: site_url,
  ogImage: `${site_url}/_static/og.jpg`,
  links: {
    portfolio: "https://engrahmadaya.vercel.app/",
    github: "https://github.com/engraya/TalentMatch-AI",
  },
  mailSupport: "engrahmadaya@gmail.com",
};


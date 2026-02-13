export interface SocialLink {
  platform: "GitHub" | "LinkedIn";
  link?: string;
  icon?: string;
}

export interface PersonalData {
  bio: string[];
  pfp?: string;
  socials?: SocialLink[];
}

export interface EducationData {
  institution: string;
  program: string;
  certification: string;
  location: string;
  timeline: string;
}

export interface ProjectsData {
  title: string;
  type: "Personal" | "Academic" | "Hackathon" | "BrainStation" | "Open-Source";
  techstack: string[];
  description: string;
  repo: string;
  images: string[];
}

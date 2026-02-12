import type { PersonalData } from "../types";
import type { EducationData } from "../types";
import type { ProjectsData } from "../types";

export const about: PersonalData = {
  bio: [
    "Currently a Term 2 Computer Systems Technology student at BCIT with a background in Mental Health & Cellular Biology from UBC.",
    "I thrive in environments that scratch my brain. My passion for tech actually stemmed from my love for automation and scripting idle ganes. As a result, I like exploring other tools and tech stacks during my free time.",
    "While my core strength lies in Web Development, I am currently focused on backend systems, diving deep into Object-Oriented Programming and Relational Databases.",
    "Beyond the coding, I love messing around with 3D-printing and Fusion360.",
  ],
  pfp: "",
  socials: [
    {
      platform: "GitHub",
      link: "https://www.github.com/notaika",
      icon: "",
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/aika-manalo/",
      icon: "",
    },
  ],
};

export const education: EducationData[] = [
  {
    institution: "British Columbia Institute of Technology",
    program: "Computer Systems Technology",
    certification: "Diploma",
    location: "Burnaby, BC",
    timeline: "2025 - Present",
  },
  {
    institution: "BrainStation",
    program: "Software Engineering Bootcamp",
    certification: "Diploma",
    location: "Vancouver, BC",
    timeline: "March 2024 - June 2024",
  },
  {
    institution: "University of British Columbia",
    program: "Cellular Biology",
    certification: "Bachelor of Science",
    location: "Vancouver, BC",
    timeline: "Graduated 2024",
  },
];

export const projects: ProjectsData[] = [
  {
    title: "Ha.BIT",
    techstack: ["JavaScript", "React", "Node.js", "MySQL"],
    description:
      "A gamified habit tracker and productivity app designed to help users build and maintain positive habits through a reward system and a cozy 8-bit adventure RPG interface.",
    repo: "https://github.com/notaika/Ha.BIT",
    images: ["/screenshots/habit/dashboard.png"],
  },
  {
    title: "PotLuck",
    techstack: ["JavaScript", "Bootstrap", "Node.js", "Firebase", "Firestore"],
    description:
      "A community-oriented recipe platform built to make cooking simple, accessible, and collaborative. The app focuses on one‑dish cooking, where every recipe is intentionally designed to be prepared using a single pot, bowl, pan, or similar cooking container. ",
    repo: "https://github.com/notaika/1800_202530_BBY14",
    images: ["/screenshots/instock/inventory-page.png"],
  },
  {
    title: "templ.it",
    techstack: ["JavaScript", "Electron", "HTML", "CSS"],
    description:
      "A utility desktop app that streamlines your workflow by creating complex folder and file structures from a saved template. Stop manually creating src, components, and utils folders; create one template instead.",
    repo: "https://github.com/notaika/templ.it",
    images: ["/screenshots/brainflix/video.png"],
  },
];

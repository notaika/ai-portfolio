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
  pfp: "src/assets/icons/aika-icon.png",
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
  techstack: [
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "SQL",
    "C",
    "TypeScript",
    "Python",
  ],
};

export const education: EducationData[] = [
  {
    institution: "British Columbia Institute of Technology",
    program: "Computer Systems Technology",
    certification: "Diploma",
    location: "Burnaby, BC",
    timeline: "September 2025 - Present",
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
    timeline: "Graduated June 2024",
  },
];

export const projects: ProjectsData[] = [
  {
    title: "Ha.BIT",
    type: "Personal",
    techstack: ["JavaScript", "React", "Node.js", "MySQL"],
    description:
      "A gamified habit tracker and productivity app designed to help users build and maintain positive habits through a reward system and a cozy 8-bit adventure RPG interface.",
    repo: "https://github.com/notaika/Ha.BIT",
    images: ["src/assets/screenshots/habit/dashboard.png"],
  },
  {
    title: "PotLuck",
    type: "Academic",
    techstack: ["JavaScript", "Bootstrap", "Node.js", "Firebase", "Firestore"],
    description:
      "A community-oriented recipe platform built to make cooking simple, accessible, and collaborative. The app focuses on one‑dish cooking, where every recipe is intentionally designed to be prepared using a single pot, bowl, pan, or similar cooking container. ",
    repo: "https://github.com/notaika/1800_202530_BBY14",
    images: ["src/assets/screenshots/instock/inventory-page.png"],
  },
  {
    title: "templ.it",
    type: "Hackathon",
    techstack: ["JavaScript", "Electron", "HTML", "CSS"],
    description:
      "A utility desktop app that streamlines your workflow by creating complex folder and file structures from a saved template. Stop manually creating src, components, and utils folders; create one template instead.",
    repo: "https://github.com/notaika/templ.it",
    images: ["src/assets/screenshots/brainflix/video.png"],
  },
  {
    title: "Instock",
    type: "BrainStation",
    techstack: [],
    description:
      "A full-stack inventory management system developed to enhance scalability and performance for a Fortune 500 client. The existing system was struggling under heavy traffic, and my team (5 people) was tasked to address these challenges. This project was developed by an Agile team using a modern tech stack.",
    repo: "",
    images: ["src/assets/screenshots/instock/inventory-page.png"],
  },
  {
    title: "Portfolio",
    type: "Personal",
    techstack: [],
    description: "",
    repo: "",
    images: ["src/assets/screenshots/portfolio/portfolio.png"],
  },
];

import React from "react";

import type { ProjectsData } from "../types";

import ProjectCard from "../components/ProjectCard/projectCard";

interface ProjectProps {
  projects: ProjectsData[];
}

export default function Projects({ projects }: ProjectProps) {
  return (
    <div>
      <ProjectCard projects={projects} />
    </div>
  );
}

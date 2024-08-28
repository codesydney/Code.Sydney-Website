"use client";
import { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import ProjectCard from "./ProjectCard";
import ProjectSectionNav from "./ProjectSectionNav";

export default function Projects({ projectsData }) {
  const [projects, setProjects] = useState(projectsData);
  const [currentProject, setCurrentProject] = useState(1);
  const handleNextClick = () => {
    if (currentProject === projects.length) {
      setCurrentProject(1);
    } else {
      setCurrentProject(currentProject + 1);
    }

    const newProjects = [...projects.slice(1), projects[0]];
    setProjects(newProjects);
  };

  return (
    <div className="pt-10 overflow-hidden xl:h-[80vh] xl:max-h-[800px] relative">
      <div className="h-[80%] relative">
        {projects &&
          projects.map((projectInfo, index) => {
            return (
              <ProjectCard
                key={projectInfo.organisation}
                index={index}
                projectInfo={projectInfo}
              />
            );
          })}
      </div>
      <div className="justify-start gap-20 hidden xl:flex ">
        <ProjectSectionNav
          projectsLength={projects.length}
          currentProject={currentProject}
          handleNextClick={handleNextClick}
        />
      </div>
    </div>
  );
}

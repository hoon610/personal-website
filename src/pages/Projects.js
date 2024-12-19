import React from "react";
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div animate={{ y: 60 }} initial={{ y: -70 }} className="projects">
      <h1 >Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              id={idx}
              name={project.name}
              image={project.image}
              skills={project.skills}
              github={project.github}
              link={project.link}
              documentation={project.documentation}
              summary={project.summary}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;

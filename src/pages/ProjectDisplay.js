import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import LinkIcon from "@mui/icons-material/Link";
import DescriptionIcon from "@mui/icons-material/Description";
import { motion } from "framer-motion";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const skillsArray = project.skills.split(",").map((skill) => skill.trim());
  return (
    <motion.div animate={{ y: 0 }} initial={{ y: -200 }} className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p className="skillBox">
        <ul>
          {skillsArray.map((skill, index) => (
            <li className="projectSkill" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </p>
      <div className="links">
        {project.link !== "" && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <LinkIcon />
          </a>
        )}
        {project.documentation !== "" && (
          <a
            href={project.documentation}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DescriptionIcon />
          </a>
        )}
        {project.github !== "" && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        )}
      </div>
      <p className="summary">{project.summary}</p>
    </motion.div>
  );
}

export default ProjectDisplay;

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectItem({ image, name, id, skills }) {
  const navigate = useNavigate();
  const skillsArray = skills.split(",").map((skill) => skill.trim());

  return (
    <motion.div
      animate={{ scale: 1 }}
      initial={{ scale: 0.8 }}
      className="projectItem"
      onClick={() => {
        navigate("/projects/" + id);
        window.scrollTo(0, 0); 
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
      <p>
        <ul>
          {skillsArray.map((skill, index) => (
            <li className="projectSkill" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </p>
    </motion.div>
  );
}

export default ProjectItem;

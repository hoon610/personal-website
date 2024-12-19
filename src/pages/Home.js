import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import "../styles/Home.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div animate={{ y: 60 }} className="home">
      <div className="about">
        <h2>Hi, My Name is Hoon</h2>
        <div className="prompt">
          <p>
            I am a myrmecologist (ants) turned software engineer with a
            passion for problem-solving
          </p>
          <a
            href="https://www.linkedin.com/in/hoon-kang-az"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/1yHsLVhMSge7rrfBlquR45-_xgU5otqSc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArticleIcon />
          </a>

          <a href="mailto:bhoonkang@gmail.com">
            <EmailIcon />
          </a>
          <a
            href="https://github.com/hoon610"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>TypeScript/JavaScript, Pythonm, R, HTML/CSS, C#</span>
          </li>
          <li className="item">
            <h2>Tools and Technologies</h2>
            <span>
              Git, React, Node.js, GCP, AWS, Firebase, Docker
            </span>
          </li>
        </ol>
      </div>
    </motion.div>
  );
}

export default Home;

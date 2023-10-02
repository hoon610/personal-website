import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Hoon</h2>
        <div className="prompt">
          <p>
            I am a myrmecologist turned software engineer with a passion for
            problem-solving
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>Python, TypeScript/JavaScript, R, HTML/CSS, C#</span>
          </li>
          <li className="item">
            <h2>Tools and Technologies</h2>
            <span>
              Git, React, TensorFlow, Node.js, AWS S3, MongoDB, Firebase
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;

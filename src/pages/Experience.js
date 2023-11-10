import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import "../styles/Experience.css";
import BiotechIcon from "@mui/icons-material/Biotech";
import ComputerIcon from "@mui/icons-material/Computer";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#D9FFF5">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "#AAD2BA", color: "#1D1E18" }}
          icon={<SchoolIcon></SchoolIcon>}
        >
          <h3 className="vertical-timeline-element-title">
            B.S. in Biological Sciences
          </h3>
          <p>Arizona State University</p>
          <p>
            Launched and maintained a digital database of physical and GIS-based
            cartographical items in the ASU Map and Geospatial Hub. Spear-headed
            four projects related to creating and maintaing new online databases
            and services.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#AAD2BA", color: "#1D1E18" }}
          icon={<BiotechIcon></BiotechIcon>}
        >
          <h3 className="vertical-timeline-element-title">
            Research Scientist
          </h3>
          <p>Ugarova Laboratories</p>
          <p>
            Launched an automated data pipeline for documenting and creating
            ELISA immunoassays. Engineered a novel method for synthesisizing
            fibrinogen A&#945; chain
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - Present"
          iconStyle={{ background: "#AAD2BA", color: "#1D1E18" }}
          icon={<SchoolIcon></SchoolIcon>}
        >
          <h3 className="vertical-timeline-element-title">
            M.S. in Computational Biology
          </h3>
          <p>University of Massachussets Lowell</p>
          <p>
            Published two peer-reviewed scientific papers on the nest
            architecture of subterranean ant nests. Collected raw data
            transformed it through a Python visualization library and analyzed
            it using a GLMM coded from R's lme4 package.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - Present"
          iconStyle={{ background: "#AAD2BA", color: "#1D1E18" }}
          icon={<ComputerIcon></ComputerIcon>}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <p>Freelance</p>
          <p>
            Utilized front-end and back-end technologies such as ReactJS, VueJS,
            Nodes,js, and .NET to create responsive, and user-friendly websites
            for local businesses. Managed end-to-end project lifecycle, from
            initial client meetings and project scope definition to coding,
            testing, and deployment.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;

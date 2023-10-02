import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import "../styles/Experience.css";
import BiotechIcon from "@mui/icons-material/Biotech";

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
            Arizona State University
          </h3>
          <p>B.S. in Biological Sciences</p>
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
            Ugarova Laboratories
          </h3>
          <p>
            Launched an automated data pipeline for documenting and creating
            ELISA immunoassays. Engineered a novel method for synthesisizing
            fibrinogen A&#945; chain
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2023"
          iconStyle={{ background: "#AAD2BA", color: "#1D1E18" }}
          icon={<SchoolIcon></SchoolIcon>}
        >
          <h3 className="vertical-timeline-element-title">
            University of Massachussets Lowell
          </h3>
          <p>M.S. in Bioinformatics</p>
          <p>
            Published two peer-reviewed scientific papers on the nest
            architecture of subterranean ant nests. Collected raw data
            transformed it through a Python visualization library and analyzed
            it using a GLMM coded from R's lme4 package.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;

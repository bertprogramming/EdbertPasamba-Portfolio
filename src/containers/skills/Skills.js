import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  return (
    <div id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={800} distance="20px">
          <h2 className="skills-header">What I Do</h2>
          <p className="skills-header-sub">
            A snapshot of the skills and technologies I work with every day.
          </p>
        </Fade>
      </div>
      <SkillSection theme={props.theme} />
    </div>
  );
}

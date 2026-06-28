import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";

export default function Skills(props) {
  return (
    <div id="skills">
      <div className="skills-header-div">
        <h2 className="skills-header">What I Do</h2>
        <p className="skills-header-sub">
          A snapshot of the skills and technologies I work with every day.
        </p>
      </div>

      <div className="skills-cards-list">
        {skills.data.map((skill, i) => (
          <div key={i} className="skill-card">
            <h3 className="skill-card-title">{skill.title}</h3>
            <SoftwareSkill logos={skill.softwareSkills} />
            <ul className="skill-card-bullets">
              {skill.skills.map((s, j) => (
                <li key={j}>{s.replace(/^- /, "")}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

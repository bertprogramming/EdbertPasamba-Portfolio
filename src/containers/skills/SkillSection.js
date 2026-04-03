import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

const cardAccents = [
  {
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    glow: "rgba(102,126,234,0.45)",
  },
  {
    gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    glow: "rgba(245,87,108,0.45)",
  },
  {
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
    glow: "rgba(79,172,254,0.45)",
  },
  {
    gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
    glow: "rgba(67,233,123,0.45)",
  },
];

class SkillSection extends Component {
  render() {
    return (
      <div className="skills-cards-grid">
        {skills.data.map((skill, i) => {
          const accent = cardAccents[i % cardAccents.length];
          return (
            <Fade bottom duration={700} delay={i * 130} key={i}>
              <div
                className={`skill-card skill-card--${i}`}
                style={{ "--glow": accent.glow, "--gradient": accent.gradient }}
              >
                <div
                  className="skill-card-top-bar"
                  style={{ background: accent.gradient }}
                />
                <h3 className="skill-card-title">{skill.title}</h3>
                <SoftwareSkill logos={skill.softwareSkills} />
                <ul className="skill-card-bullets">
                  {skill.skills.map((s, j) => (
                    <li key={j}>{s.replace(/^- /, "")}</li>
                  ))}
                </ul>
              </div>
            </Fade>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;

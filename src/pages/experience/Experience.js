import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import "./Experience.css";

class Experience extends Component {
  render() {
    const { theme, toggleTheme, isDark } = this.props;
    const allExperiences = experience.sections.flatMap((s) => s.experiences);

    return (
      <div className="experience-main">
        <Header theme={theme} toggleTheme={toggleTheme} isDark={isDark} />

        <div className="exp-page-wrapper">
          {/* Page Header */}
          <Fade bottom duration={800} distance="30px">
            <div className="exp-page-header">
              <h1 className="exp-page-title" style={{ color: theme.text }}>
                Experience
              </h1>
              <p
                className="exp-page-sub"
                style={{ color: theme.secondaryText }}
              >
                {experience.description}
              </p>
            </div>
          </Fade>

          {/* Experience Cards */}
          <div className="exp-cards-list">
            {allExperiences.map((exp, i) => {
              let logo;
              try {
                logo = require(`../../assets/images/${exp.logo_path}`);
              } catch (e) {
                logo = require(`../../assets/images/codeInLogo.png`);
              }

              const isCurrent = exp.duration.toLowerCase().includes("present");

              return (
                <Fade bottom duration={700} delay={i * 120} key={i}>
                  <div className="exp-card">
                    <div className="exp-card-logo-wrap">
                      <img
                        src={logo}
                        alt={exp.company}
                        className="exp-card-logo"
                      />
                    </div>
                    <div className="exp-card-body">
                      <div className="exp-card-top">
                        <div className="exp-card-left">
                          <h2
                            className="exp-card-role"
                            style={{ color: theme.text }}
                          >
                            {exp.title}
                          </h2>
                          <a
                            href={exp.company_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="exp-card-company"
                            style={{ color: theme.imageHighlight }}
                          >
                            {exp.company}
                          </a>
                        </div>
                        <div className="exp-card-right">
                          {isCurrent && (
                            <span
                              className="exp-badge-current"
                              style={{
                                backgroundColor: theme.imageHighlight + "22",
                                color: theme.imageHighlight,
                                borderColor: theme.imageHighlight + "55",
                              }}
                            >
                              Current
                            </span>
                          )}
                          <p
                            className="exp-card-duration"
                            style={{ color: theme.secondaryText }}
                          >
                            {exp.duration}
                          </p>
                          <p
                            className="exp-card-location"
                            style={{ color: theme.secondaryText }}
                          >
                            <span role="img" aria-label="location pin">
                              📍
                            </span>{" "}
                            {exp.location}
                          </p>
                        </div>
                      </div>
                      <p
                        className="exp-card-desc"
                        style={{ color: theme.secondaryText }}
                      >
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Experience;

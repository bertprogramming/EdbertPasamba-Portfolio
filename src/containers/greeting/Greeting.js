import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <div className="hero-section-wrapper">
      <section className="hero-section" id="greeting">
        <Fade left duration={1000} distance="40px">
          <div className="hero-content">
            <p className="hero-hi" style={{ color: theme.secondaryText }}>
              Hi there, I'm
            </p>
            <h1 className="hero-name" style={{ color: theme.text }}>
              {greeting.title}
            </h1>
            <div className="hero-roles">
              <span
                className="role-tag"
                style={{
                  borderColor: theme.imageHighlight,
                  color: theme.imageHighlight,
                }}
              >
                Software Developer
              </span>
              <span className="role-dot" style={{ color: theme.secondaryText }}>
                ·
              </span>
              <span
                className="role-tag"
                style={{
                  borderColor: theme.imageHighlight,
                  color: theme.imageHighlight,
                }}
              >
                Data Engineer
              </span>
            </div>
            <p className="hero-subtitle" style={{ color: theme.secondaryText }}>
              {greeting.subTitle}
            </p>
            <div className="hero-cta">
              <a
                href={greeting.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ backgroundColor: theme.imageHighlight }}
              >
                View Resume
              </a>
              <a
                href="/contact"
                className="btn-secondary"
                style={{
                  borderColor: theme.imageHighlight,
                  color: theme.imageHighlight,
                }}
              >
                Contact Me
              </a>
            </div>
            <SocialMedia theme={theme} />
          </div>
        </Fade>

        <Fade right duration={1000} distance="40px">
          <div className="hero-image">
            <div
              className="photo-frame"
              style={{ borderColor: theme.imageHighlight }}
            >
              <div
                className="photo-overlay"
                style={{
                  background: `linear-gradient(160deg, ${theme.imageHighlight}55 0%, transparent 55%)`,
                }}
              ></div>
              <img
                src="/icons/Edbert-Suit1.jpg"
                alt="Edbert Pasamba"
                className="hero-photo"
              />
            </div>
            <div
              className="photo-accent-bar"
              style={{ backgroundColor: theme.imageHighlight }}
            ></div>
          </div>
        </Fade>
      </section>
    </div>
  );
}

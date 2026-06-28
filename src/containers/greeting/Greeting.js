import React, { useState, useEffect } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

// Convert Drive share link → embed preview URL
function getDriveEmbedUrl(url) {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://drive.google.com/file/d/${match[1]}/preview`;
  return url;
}

export default function Greeting(props) {
  const theme = props.theme;
  const [resumeOpen, setResumeOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setResumeOpen(false);
    };
    if (resumeOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [resumeOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = resumeOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [resumeOpen]);

  const embedUrl = getDriveEmbedUrl(greeting.resumeLink);

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
                System Automation
              </span>
            </div>
            <p className="hero-subtitle" style={{ color: theme.secondaryText }}>
              {greeting.subTitle}
            </p>
            <div className="hero-cta">
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

      {/* ── Resume Modal ── */}
      {resumeOpen && (
        <div
          className="resume-modal-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setResumeOpen(false);
          }}
        >
          <div className="resume-modal">
            {/* Modal Header */}
            <div className="resume-modal-header">
              <span className="resume-modal-title">Resume</span>
              <div className="resume-modal-actions">
                <a
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-modal-open-btn"
                  title="Open in Google Drive"
                >
                  ↗ Open in Drive
                </a>
                <button
                  className="resume-modal-close"
                  onClick={() => setResumeOpen(false)}
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* PDF Embed */}
            <div className="resume-modal-body">
              <iframe
                src={embedUrl}
                title="Resume"
                className="resume-iframe"
                allow="autoplay"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

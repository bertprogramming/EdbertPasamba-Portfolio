import React, { useState, useRef } from "react";
import "./SkillsPlaceholder.css";

const sources = [
  { label: "REST APIs", icon: "simple-icons:fastapi", color: "#009688" },
  {
    label: "CSV / Excel",
    icon: "simple-icons:microsoftexcel",
    color: "#217346",
  },
  { label: "SQL Database", icon: "simple-icons:postgresql", color: "#336791" },
  { label: "Web Scraping", icon: "simple-icons:python", color: "#3776AB" },
];

function Icon({ name, color, size = "1.6rem" }) {
  return (
    <span
      className="iconify"
      data-icon={name}
      style={{ color, fontSize: size }}
      data-inline="false"
    />
  );
}

function Arrow() {
  return (
    <div className="sp-arrow">
      <div className="sp-arrow-shaft" />
      <span className="sp-arrow-head">▼</span>
    </div>
  );
}

// ── Data Engineering projects ──────────────────────────────────────────────

function DE_Project1({ theme }) {
  return (
    <div className="sp-project-card">
      <span className="sp-project-badge">Project</span>
      <p className="sp-project-title" style={{ color: theme.text }}>
        BPO Company Data Centralization
      </p>
      <div className="sp-pipeline">
        <div
          className="sp-step-card"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="sp-col-label" style={{ color: theme.secondaryText }}>
            Data Sources
          </p>
          <div className="sp-sources">
            {sources.map((s, i) => (
              <div
                key={i}
                className="sp-source-node"
                style={{ borderColor: theme.imageHighlight }}
              >
                <Icon name={s.icon} color={s.color} size="1rem" />
                <span className="sp-source-label" style={{ color: theme.text }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <Arrow />
        <div
          className="sp-step-card"
          style={{ borderColor: "#017CEE", background: "rgba(1,124,238,0.08)" }}
        >
          <div className="sp-step-icons">
            <Icon name="simple-icons:python" color="#3776AB" />
            <Icon name="simple-icons:apacheairflow" color="#017CEE" />
          </div>
          <span className="sp-etl-label" style={{ color: theme.text }}>
            Python + Airflow
          </span>
          <span className="sp-etl-sub" style={{ color: theme.secondaryText }}>
            ETL Pipeline
          </span>
        </div>
        <Arrow />
        <div
          className="sp-step-card"
          style={{ borderColor: "#47A248", background: "rgba(71,162,72,0.08)" }}
        >
          <Icon name="simple-icons:mongodb" color="#47A248" />
          <span className="sp-etl-label" style={{ color: theme.text }}>
            MongoDB
          </span>
          <span className="sp-etl-sub" style={{ color: theme.secondaryText }}>
            Data Warehouse
          </span>
        </div>
        <Arrow />
        <div
          className="sp-step-card"
          style={{
            borderColor: "#F2C811",
            background: "rgba(242,200,17,0.08)",
          }}
        >
          <Icon name="simple-icons:powerbi" color="#F2C811" />
          <span className="sp-etl-label" style={{ color: theme.text }}>
            Power BI
          </span>
          <span className="sp-etl-sub" style={{ color: theme.secondaryText }}>
            Visualization & Dashboards
          </span>
        </div>
      </div>
      <div className="sp-impact">
        <span className="sp-impact-label">Business Impact</span>
        <p className="sp-impact-text" style={{ color: theme.secondaryText }}>
          Standardized reporting workflows and empowered the analytics team with
          unified, real-time data access across multiple sources.
        </p>
      </div>
    </div>
  );
}

function DE_Project2({ theme }) {
  return (
    <div className="sp-project-card">
      <span className="sp-project-badge">Project</span>
      <p className="sp-project-title" style={{ color: theme.text }}>
        Lead List Cleaner
      </p>
      <div className="sp-pipeline">
        <div
          className="sp-step-card"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="sp-col-label" style={{ color: theme.secondaryText }}>
            Raw Input
          </p>
          <div className="sp-sources">
            <div
              className="sp-source-node"
              style={{ borderColor: theme.imageHighlight }}
            >
              <Icon
                name="simple-icons:microsoftexcel"
                color="#217346"
                size="1rem"
              />
              <span className="sp-source-label" style={{ color: theme.text }}>
                Excel / CSV
              </span>
            </div>
          </div>
        </div>
        <Arrow />
        <div
          className="sp-step-card"
          style={{
            borderColor: "#000000",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          <div className="sp-step-icons">
            <Icon name="simple-icons:nextdotjs" color="#ffffff" />
          </div>
          <span className="sp-etl-label" style={{ color: theme.text }}>
            Next.js
          </span>
          <span className="sp-etl-sub" style={{ color: theme.secondaryText }}>
            Upload & Review Interface
          </span>
        </div>
        <Arrow />
        <div
          className="sp-step-card"
          style={{
            borderColor: "#3776AB",
            background: "rgba(55,118,171,0.08)",
          }}
        >
          <div className="sp-step-icons">
            <Icon name="simple-icons:python" color="#3776AB" />
          </div>
          <span className="sp-etl-label" style={{ color: theme.text }}>
            Python
          </span>
          <span className="sp-etl-sub" style={{ color: theme.secondaryText }}>
            Dedup · Validate · Normalize
          </span>
        </div>
        <Arrow />
        <div
          className="sp-step-card"
          style={{
            borderColor: "#336791",
            background: "rgba(51,103,145,0.08)",
          }}
        >
          <div className="sp-step-icons">
            <Icon name="simple-icons:mysql" color="#4479A1" />
          </div>
          <span className="sp-etl-label" style={{ color: theme.text }}>
            Transform to SQL
          </span>
          <span className="sp-etl-sub" style={{ color: theme.secondaryText }}>
            Vicidial & Dialer Servers
          </span>
        </div>
      </div>
      <div className="sp-impact">
        <span className="sp-impact-label">Business Impact</span>
        <p className="sp-impact-text" style={{ color: theme.secondaryText }}>
          Automated lead validation and normalization via a Next.js interface,
          exporting clean SQL-ready data directly into Vicidial dialer servers —
          eliminating manual cleanup and reducing lead load time significantly.
        </p>
      </div>
    </div>
  );
}

function DE_Project3({ theme }) {
  return (
    <div className="sp-project-card">
      <span className="sp-project-badge">Project</span>
      <p className="sp-project-title" style={{ color: theme.text }}>
        Privacy Impact Assessment App
      </p>
      <div className="sp-pipeline">
        <div
          className="sp-step-card"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="sp-col-label" style={{ color: theme.secondaryText }}>
            Input
          </p>
          <div className="sp-sources">
            <div
              className="sp-source-node"
              style={{ borderColor: theme.imageHighlight }}
            >
              <Icon name="simple-icons:google" color="#4285F4" size="1rem" />
              <span className="sp-source-label" style={{ color: theme.text }}>
                Department PIA Forms
              </span>
            </div>
          </div>
        </div>
        <Arrow />
        <div
          className="sp-step-card"
          style={{
            borderColor: "#4285F4",
            background: "rgba(66,133,244,0.08)",
          }}
        >
          <div className="sp-step-icons">
            <Icon name="simple-icons:appsheet" color="#4285F4" />
          </div>
          <span className="sp-etl-label" style={{ color: theme.text }}>
            AppSheet
          </span>
          <span className="sp-etl-sub" style={{ color: theme.secondaryText }}>
            No-Code Application
          </span>
        </div>
        <Arrow />
        <div
          className="sp-step-card"
          style={{ borderColor: "#34A853", background: "rgba(52,168,83,0.08)" }}
        >
          <div className="sp-step-icons">
            <Icon name="simple-icons:googleappsscript" color="#34A853" />
          </div>
          <span className="sp-etl-label" style={{ color: theme.text }}>
            Apps Script
          </span>
          <span className="sp-etl-sub" style={{ color: theme.secondaryText }}>
            Automation & Processing
          </span>
        </div>
        <Arrow />
        <div
          className="sp-step-card"
          style={{
            borderColor: "#4285F4",
            background: "rgba(66,133,244,0.08)",
          }}
        >
          <div className="sp-step-icons">
            <Icon name="simple-icons:looker" color="#4285F4" />
          </div>
          <span className="sp-etl-label" style={{ color: theme.text }}>
            Looker Studio
          </span>
          <span className="sp-etl-sub" style={{ color: theme.secondaryText }}>
            Compliance Dashboard
          </span>
        </div>
      </div>
      <div className="sp-impact">
        <span className="sp-impact-label">Business Impact</span>
        <p className="sp-impact-text" style={{ color: theme.secondaryText }}>
          Enabled company-wide privacy impact assessments across all business
          processes, ensuring compliance with the National Privacy Commission
          (NPC) requirements under the Philippine Data Privacy Act of 2012 (RA
          10173).
        </p>
      </div>
    </div>
  );
}

// ── Software Development projects ─────────────────────────────────────────

function SD_Project1({ theme }) {
  return (
    <div className="sp-project-card">
      <span className="sp-project-badge">Project</span>
      <p className="sp-project-title" style={{ color: theme.text }}>
        Agent Form Submissions System
      </p>
      <div className="sp-pipeline">
        <div
          className="sp-step-card"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="sp-col-label" style={{ color: theme.secondaryText }}>
            Input
          </p>
          <div className="sp-sources">
            <div
              className="sp-source-node"
              style={{ borderColor: theme.imageHighlight }}
            >
              <Icon
                name="simple-icons:googlechrome"
                color="#4285F4"
                size="1rem"
              />
              <span className="sp-source-label" style={{ color: theme.text }}>
                Agent Web Interface
              </span>
            </div>
          </div>
        </div>
        <Arrow />
        <div
          className="sp-step-card"
          style={{
            borderColor: "#000000",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          <div className="sp-step-icons">
            <Icon name="simple-icons:nextdotjs" color="#ffffff" />
          </div>
          <span className="sp-etl-label" style={{ color: theme.text }}>
            Next.js
          </span>
          <span className="sp-etl-sub" style={{ color: theme.secondaryText }}>
            Form & Submission Interface
          </span>
        </div>
        <Arrow />
        <div
          className="sp-step-card"
          style={{
            borderColor: "#4479A1",
            background: "rgba(68,121,161,0.08)",
          }}
        >
          <div className="sp-step-icons">
            <Icon name="simple-icons:mysql" color="#4479A1" />
          </div>
          <span className="sp-etl-label" style={{ color: theme.text }}>
            MySQL
          </span>
          <span className="sp-etl-sub" style={{ color: theme.secondaryText }}>
            Data Warehouse
          </span>
        </div>
        <Arrow />
        <div
          className="sp-step-card"
          style={{
            borderColor: "#F2C811",
            background: "rgba(242,200,17,0.08)",
          }}
        >
          <Icon name="simple-icons:powerbi" color="#F2C811" />
          <span className="sp-etl-label" style={{ color: theme.text }}>
            Automated Reporting
          </span>
          <span className="sp-etl-sub" style={{ color: theme.secondaryText }}>
            Team & Client Dashboards
          </span>
        </div>
      </div>
      <div className="sp-impact">
        <span className="sp-impact-label">Business Impact</span>
        <p className="sp-impact-text" style={{ color: theme.secondaryText }}>
          Replaced Google Forms and Sheets with a governed web application,
          giving the company full data ownership and automated reporting. The
          visibility it provided directly prevented a client pullout, protecting
          a key revenue stream for the business.
        </p>
      </div>
    </div>
  );
}

// ── Carousel component ─────────────────────────────────────────────────────

function Carousel({ projects, theme }) {
  const [active, setActive] = useState(0);
  const [animClass, setAnimClass] = useState("");
  const [direction, setDirection] = useState("right");
  const slideRef = useRef(null);

  const goTo = (next, dir) => {
    setDirection(dir);
    setAnimClass("sp-slide-exit");
    setTimeout(() => {
      setActive(next);
      setAnimClass("sp-slide-enter");
      setTimeout(() => setAnimClass(""), 350);
    }, 250);
  };

  const prev = () =>
    goTo((active - 1 + projects.length) % projects.length, "left");
  const next = () => goTo((active + 1) % projects.length, "right");

  const Project = projects[active];

  return (
    <>
      <div className="sp-carousel">
        <div
          className="sp-carousel-zone sp-carousel-zone--left"
          onClick={prev}
          role="button"
          aria-label="Previous"
        >
          <span className="sp-carousel-zone-icon">‹</span>
        </div>
        <div
          ref={slideRef}
          className={`sp-carousel-slide ${animClass} ${
            animClass ? `sp-dir-${direction}` : ""
          }`}
        >
          <Project theme={theme} />
        </div>
        <div
          className="sp-carousel-zone sp-carousel-zone--right"
          onClick={next}
          role="button"
          aria-label="Next"
        >
          <span className="sp-carousel-zone-icon">›</span>
        </div>
      </div>
      {projects.length > 1 && (
        <div className="sp-dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className={`sp-dot ${i === active ? "sp-dot--active" : ""}`}
              onClick={() => goTo(i, i > active ? "right" : "left")}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      )}
    </>
  );
}

const deProjects = [DE_Project1, DE_Project2];
const sdProjects = [SD_Project1, DE_Project3];

export default function SkillsPlaceholder({ theme }) {
  return (
    <div className="sp-section">
      <div className="sp-inner">
        <div className="skills-header-div">
          <h2 className="skills-header">Skills</h2>
          <p className="skills-header-sub">
            Technologies &amp; what I build with them
          </p>
        </div>

        <h3 className="sp-category-title">Data Engineering</h3>
        <Carousel projects={deProjects} theme={theme} />

        <h3 className="sp-category-title sp-category-title--spaced">
          Software Development
        </h3>
        <Carousel projects={sdProjects} theme={theme} />
      </div>
    </div>
  );
}

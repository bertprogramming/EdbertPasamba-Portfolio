import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    if (url === "#") return;
    var win = window.open(url, "_blank");
    win.focus();
  }

  const isExternal = repo.url !== "#";

  return (
    <Fade bottom duration={600}>
      <div
        className="glass-card"
        onClick={() => openRepoinNewTab(repo.url)}
        style={{ cursor: isExternal ? "pointer" : "default" }}
      >
        {/* Top row: name + arrow */}
        <div className="glass-card-header">
          <h3 className="glass-card-name">{repo.name}</h3>
          {isExternal && <span className="glass-card-arrow">↗</span>}
        </div>

        {/* Description */}
        <p className="glass-card-desc">{repo.description}</p>

        {/* Bottom: date + tech */}
        <div className="glass-card-footer">
          <span className="glass-card-date">
            {repo.createdAt.split("T")[0].replace(/-/g, " · ")}
          </span>
          <div className="glass-card-langs">
            <ProjectLanguages logos={repo.languages} />
          </div>
        </div>
      </div>
    </Fade>
  );
}

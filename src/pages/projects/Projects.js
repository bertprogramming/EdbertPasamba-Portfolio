import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="proj-page-wrapper">
        <Header
          theme={theme}
          toggleTheme={this.props.toggleTheme}
          isDark={this.props.isDark}
        />

        {/* ── Page Header ── */}
        <div className="proj-page-header">
          <h1 className="proj-page-title">{projectsHeader.title}</h1>
          <p className="proj-page-sub" style={{ color: theme.secondaryText }}>
            {projectsHeader.description}
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="proj-cards-grid">
          {ProjectsData.data.map((repo) => (
            <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
          ))}
        </div>

        {/* ── More Projects Button ── */}
        <div className="proj-more-btn-wrap">
          <Button
            text={"More on GitHub"}
            className="project-button"
            href={greeting.githubProfile}
            newTab={true}
            theme={theme}
          />
        </div>

        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Projects;

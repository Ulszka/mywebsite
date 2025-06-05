import { BrowserRouter as Route, NavLink } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import projects from "./ProjectData";
import SkillBox from "../../components/SkillBox/SkillBox";
import git from "../../assets/my_projects/git.png";
import "./project.scss";

const Project = () => {
  const location = useLocation();
  const indexParam = typeof location.state === "number" ? location.state : 0;
  const [index, setIndex] = useState<number>(indexParam);

  function getNextProject() {
    if (index !== projects.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function getPreviousProject() {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(projects.length - 1);
    }
  }

  return (
    <div className="project-div">
      <h3 className="project-title">{projects[index].projectTitle}</h3>
      <hr />
      <div className="project-content-container">
        <img src={projects[index].projectImage} alt="project" />
        <div className="project-content-text">
          <div className="project-technologies">
            {projects[index].projectTechnologies.map((technology) => (
              <SkillBox boxText={technology} key={technology} />
            ))}
          </div>
          <p className="project-description">
            {projects[index].projectDescription}
          </p>
          {projects[index].isExternal ? (
            <a
              href={projects[index].projectUrl}
              target="_blank"
              rel="noreferrer"
              className="project-repository-button"
            >
              <button>{projects[index].buttonText}</button>
            </a>
          ) : (
            <NavLink
              to={{
                pathname: projects[index].projectUrl,
              }}
              className="project-repository-button"
            >
              <button>{projects[index].buttonText}</button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;

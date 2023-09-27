import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Project as ProjectT } from "../../types";
import "./Project.scss";

export const Project: FC<{ project: ProjectT }> = ({ project }) => {
  return (
    <div className="projects__item project" key={project.id}>
      <h2>
        {project.projectName.length < 10
          ? project.projectName
          : `${project.projectName.slice(0, 10)} ...`}
      </h2>
      <div className="project__stats">
        {project.data &&
          project.data.map((status) => {
            return (
              <h5 key={status.id}>
                {status.title.split("").slice(0, 3).join("")}
                <span>{status.items.length}</span>
              </h5>
            );
          })}
      </div>
      <NavLink to={`/project/${project.id}`} className="project__item-go">
        Открыть проект
      </NavLink>
    </div>
  );
};

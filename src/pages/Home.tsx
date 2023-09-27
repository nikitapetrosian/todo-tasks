import React, { FC, useState } from "react";
import { Project as ProjectComponent } from "../components/Projects";
import { createProject } from "../services/projectService";
import { Project } from "../types";

export const Home: FC<{ setProjects: Function; projects: Project[] }> = ({
  setProjects,
  projects,
}) => {
  const [name, setName] = useState("");
  const [serch, setSerch] = useState("");
  const [create, setCreate] = useState(false);

  const handleCreate = (e: any) => {
    e.preventDefault();
    const inp = document.getElementById("create");
    inp?.setAttribute("style", "display: inline-block;");
    setCreate(!create);
    if (!name) return;
    setProjects(createProject(name));
    setName("");
    inp?.setAttribute("style", "display: none;");
    setCreate(!create);
  };

  return (
    <div className="projects">
      <div className="projects__form">
        <form>
          <input
            id="create"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            style={{ display: "none" }}
          />
          <button onClick={(e) => handleCreate(e)}>
            {create ? "Создать" : "Новый проект"}
          </button>
        </form>
        <div className="projects__search">
          <form>
            <input
              value={serch}
              type="text"
              id="search"
              placeholder="Поиск по проектам"
              onChange={(e) => setSerch(e.target.value)}
            />
          </form>
        </div>
      </div>
      <h1 className="projects__title">Дейсвующие проекты</h1>
      <ul className="container projects__container" key="ul">
        {projects &&
          projects.map((project) => (
            <div key={project.id}>
              <ProjectComponent project={project} />
            </div>
          ))}
      </ul>
    </div>
  );
};

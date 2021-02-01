//@ts-ignore
import ProjectList from "../Components/ProjectList.tsx";

const projects = [{ title: "Project 1" }, { title: "Project 2" }];

const Project = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Project;

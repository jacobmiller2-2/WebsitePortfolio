import { Container } from "react-bootstrap";
import ProjectList from "../Components/ProjectList";

import styles from "../styles/ProjectsView.module.css";

const projects = [
  {
    title: "Start My Project",
    summary: "A lightweight CLI for beginning daily devlopment processes",
    tech: ["python"],
    projectLink: "",
    src: "",
  },
  {
    title: "Project 2",
    summary: "summary",
    tech: ["nodejs", "javascript"],
    projectLink: "",
    src: "",
  },
  {
    title: "Project 3",
    summary: "summary",
    tech: ["python"],
    projectLink: "",
    src: "",
  },
  {
    title: "Project 4",
    summary: "summary",
    tech: ["python"],
    projectLink: "",
    src: "",
  },
];

const Project = () => {
  return (
    <Container>
      <div id={styles.projectsView}>
        <h1 id={styles.projectTitle}>Projects: </h1>
        <ProjectList id={styles.projectList} projects={projects} />
      </div>
    </Container>
  );
};

export default Project;

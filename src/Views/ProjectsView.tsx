//@ts-ignore
import { Container } from "react-bootstrap";
import ProjectList from "../Components/ProjectList.tsx";

import styles from "../styles/ProjectsView.module.css";

const projects = [{ title: "Project 1" }, { title: "Project 2" }];

const Project = () => {
  return (
    <Container>
      <div id={styles.projectsView}>
        <h1 id={styles.projectTitle}>Projects</h1>
        <ProjectList id={styles.projectList} projects={projects} />
      </div>
    </Container>
  );
};

export default Project;

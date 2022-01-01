import { Container } from "react-bootstrap";
import ProjectList from "../Components/ProjectList";

import styles from "../styles/ProjectsView.module.css";
import genStyles from "../styles/generic.module.css";

const Project = ({ projects }) => {
  return (
    <Container>
      <div id={styles.projectsView}>
        <h1 className={genStyles.sectionHeader}>Projects: </h1>
        <ProjectList id={styles.projectList} projects={projects} />
      </div>
    </Container>
  );
};

export default Project;

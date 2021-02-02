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
    title: "VT Hacks Live-Site",
    summary: "The web application to be used by the VT Hacks hackathon",
    tech: ["typescript", "html", "css", "gatsby", "react"],
    projectLink: "https://live.vthacks.com/",
    src: "https://github.com/vthacks-org/Live-Site",
  },
  {
    title: "Lovely Letters",
    summary:
      "A web application that allows users to send letters to each other. Built with a React frontend, and an express backend server",
    tech: ["javascript", "nodejs", "html", "css"],
    projectLink: "https://priyanka.jacobmiller22.com/",
    src: [
      "https://github.com/jacobmiller22/merry-christmas",
      "https://github.com/jacobmiller22/merry-christmas-server",
    ],
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

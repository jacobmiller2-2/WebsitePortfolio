import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

import styles from "../styles/splash.module.css";

const Intro = () => {
  return (
    <Container className={styles.splash}>
      <Jumbotron fluid>
        <h1>Hi, I am Jacob Miller.</h1>
        <h2>
          <span id={styles.status}>
            Status <span className={styles.blink}>$&gt;</span>
          </span>{" "}
          Pursuing a degree in Computer Science
          <span id={styles.status}>
            <span className={styles.terminalCursor}>▂</span>
          </span>
        </h2>
      </Jumbotron>
    </Container>
  );
};

export default Intro;

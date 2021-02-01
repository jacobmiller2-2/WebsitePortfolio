import { Container, Jumbotron } from "react-bootstrap";

// @ts-ignore
import styles from "../styles/splash.module.css";

const Intro = () => {
  return (
    <Container className={styles.splash}>
      <Jumbotron fluid>
        <h1>Hi, I am Jacob Miller.</h1>
        <h2>Status $&gt; Pursuing a degree in Computer Science</h2>
      </Jumbotron>
    </Container>
  );
};

export default Intro;

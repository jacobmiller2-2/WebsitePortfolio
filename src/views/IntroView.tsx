import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Header from "./HeaderView";

import splash from "../styles/splash.module.css";
import styles from "../styles/IntroView.module.css";
// import styles from "../styles/Home.module.css";

const Intro = () => {
  return (
    <>
      <Header />
      <Container className={splash.splash}>
        <Jumbotron fluid>
          <h1>Hi, I am Jacob Miller.</h1>
          <h2 className={splash["splash-code"]}>
            <span id={splash.status}>
              Status <span className={splash.blink}>$&gt;</span>
            </span>{" "}
            <span className={splash["splash-code-text"]}>
              Pursuing a degree in Computer Science
            </span>
            <span id={splash.status}>
              <span className={splash.terminalCursor}>▂</span>
            </span>
          </h2>
        </Jumbotron>
      </Container>
    </>
  );
};

export default Intro;

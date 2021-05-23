import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import splash from "../styles/splash.module.css";
import styles from "../styles/IntroView.module.css";
// import styles from "../styles/Home.module.css";

const Intro = () => {
  return (
    <>
      <Navbar sticky="top" id="nav" className="nav">
        <Navbar.Brand href="#intro">Jacob Miller</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div id="nav-blur" />
      </Navbar>
      <Container className={splash.splash}>
        <Jumbotron fluid>
          <h1>Hi, I am Jacob Miller.</h1>
          <h2>
            <span id={splash.status}>
              Status <span className={splash.blink}>$&gt;</span>
            </span>{" "}
            Pursuing a degree in Computer Science
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

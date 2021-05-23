import Head from "next/head";
import React from "react";

import IntroView from "../Views/IntroView";
import ProjectsView from "../Views/ProjectsView";
import AboutView from "../Views/AboutView";
import FooterView from "../Views/FooterView";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import styles from "../styles/Home.module.css";

import projects from "./api/projects";

export default function Index({ projects }) {
  const contactInfo = {
    firstName: "Jacob",
    lastName: "Miller",
    email: "jacobmillerdev@gmail.com",
    phone: "",
    social: {
      github: {
        user: "jacobmiller22",
        link: "https://github.com/jacobmiller22",
      },
      linkedin: {
        user: "jacobmiller22",
        link: "https://www.linkedin.com/in/jacobmiller22/",
      },
      twitter: {
        user: "jacobmiller22",
        link: "",
      },
      youtube: {
        user: "Jacob Develops",
        link: "https://www.youtube.com/channel/UCuNIpl8S8Nk3yCD0p2J2YBA",
      },
    },
  };

  return (
    <>
      <Head>
        <title>Jacob Miller</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Portfolio Website showcasing projects developed by Jacob Miller."
          key="title"
        />
      </Head>

      {/* <Navbar sticky="top" id="nav" className="nav">
        <Navbar.Brand href="#intro">Jacob Miller</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div id="nav-blur" />
      </Navbar> */}
      <div id="top-stripe"></div>
      <Col>
        <Row id="intro">
          <IntroView />
        </Row>
        <Row id="projects" className={styles.alt}>
          <ProjectsView projects={projects} />
        </Row>
        <Row id="about" className={styles.primary}>
          <AboutView contactInfo={contactInfo} />
        </Row>

        <FooterView contactInfo={contactInfo} />
      </Col>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      projects: JSON.parse(await projects()),
    },
  };
}

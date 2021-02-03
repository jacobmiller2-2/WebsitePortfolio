import Head from "next/head";

import IntroView from "../Views/IntroView";
import ProjectsView from "../Views/ProjectsView";
import AboutView from "../Views/AboutView";
import FooterView from "../Views/FooterView";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import styles from "../styles/Home.module.css";

export default function Home() {
  const contactInfo = {
    firstName: "Jacob",
    lastName: "Miller",
    email: "jacobmillerdev@gmail.com",
    phone: "",
    social: {
      github: {
        user: "jacobmiller22",
        link: "",
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
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Col>
        <Row>
          <IntroView />
        </Row>
        <Row className={styles.alt}>
          <ProjectsView />
        </Row>
        <Row className={styles.primary}>
          <AboutView contactInfo={contactInfo} />
        </Row>

        <FooterView contactInfo={contactInfo} />
      </Col>
    </>
  );
}

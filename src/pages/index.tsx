import Head from "next/head";

import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import IntroView from "../Views/IntroView";
import ProjectsView from "../Views/ProjectsView";
import AboutView from "../Views/AboutView";
import FooterView from "../Views/FooterView";

import Container from "react-bootstrap/Container";

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
    <Container className='container'>
      <Head>
        <title>Jacob Miller</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <IntroView />
      <ProjectsView />
      <AboutView contactInfo={contactInfo} />
      <FooterView contactInfo={contactInfo} />
    </Container>
  );
}

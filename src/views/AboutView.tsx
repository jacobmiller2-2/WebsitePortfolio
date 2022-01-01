import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContactDetails from "components/ContactDetails";
import ContactForm from "components/ContactForm";

import genStyles from "../styles/generic.module.css";

const About = ({ contactInfo }) => {
  return (
    <Container>
      <h1 className={genStyles.sectionHeader}>About Me</h1>
      <Row>
        <Col style={{ borderRight: "1px solid rgb(var(--pri-clr))" }}>
          <div style={{ textAlign: "center", padding: "25px" }}>
            Currently, I am majoring in computer science and minoring in math
            and cybersecurity at Virginia Tech, Go Hokies! I enjoy running and
            playing video games. One of my biggest passions is supporting the
            development of reusable rocket ships. If you're interested in having
            a chat, feel free to contact me.
          </div>
          <ContactDetails contactInfo={contactInfo} />
        </Col>
        <Col>
          <h2>Contact Me</h2>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default About;

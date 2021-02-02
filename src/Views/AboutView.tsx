import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContactDetails from "../Components/ContactDetails";
import ContactForm from "../Components/ContactForm";

import genStyles from "../styles/generic.module.css";

const About = () => {
  return (
    <Container>
      <h1 className={genStyles.sectionHeader}>Contact Me</h1>
      <Row>
        <Col>
          <ContactForm />
        </Col>
        <Col>
          <ContactDetails />
        </Col>
      </Row>
      <div className={genStyles.sectionView}>
        {/* Contact Form -> left side of page */}

        {/* My details -> right side of page */}
      </div>
    </Container>
  );
};

export default About;

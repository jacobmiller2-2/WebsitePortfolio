import Col from "react-bootstrap/Col";
import {
  Envelope,
  Phone,
  Github,
  Linkedin,
  Youtube,
} from "react-bootstrap-icons";

import contactStyles from "../styles/ContactDetails.module.css";

const ContactDetails = ({ contactInfo }) => {
  const { firstName, lastName, email, phone } = contactInfo;
  const { github, linkedin, youtube } = contactInfo.social;

  const width = "32";
  const height = "32";

  return (
    <div id={contactStyles.contactWrapper}>
      <h2>
        {firstName} {lastName}
      </h2>
      <div id={contactStyles.direct}>
        <div className={contactStyles.item}>
          <a href={`mailto:${email}`} target="_blank">
            <Envelope width={width} height={height} /> {email}
          </a>
        </div>
        <div className={contactStyles.item}>
          <a href={github.link} target="_blank">
            <Github width={width} height={height} /> {github.user}
          </a>
        </div>
        <div className={contactStyles.item}>
          <a href={linkedin.link} target="_blank">
            <Linkedin width={width} height={height} /> {linkedin.user}
          </a>
        </div>
        <div className={contactStyles.item}>
          <a href={youtube.link} target="_blank">
            <Youtube width={width} height={height} /> {youtube.user}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

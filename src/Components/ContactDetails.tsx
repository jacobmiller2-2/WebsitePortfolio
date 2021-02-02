import Col from "react-bootstrap/Col";
import {
  Envelope,
  Phone,
  Github,
  Linkedin,
  Youtube,
} from "react-bootstrap-icons";

import contactStyles from "../styles/ContactDetails.module.css";

const ContactDetails = () => {
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
          <a href={`mailto:${email}`}>
            <Envelope width={width} height={height} /> {email}
          </a>
        </div>
        <div className={contactStyles.item}>
          <a href={`tele:${phone}`}>
            <Phone width={width} height={height} /> {phone}
          </a>
        </div>
      </div>
      <div id={contactStyles.social}>
        <div className={contactStyles.item}>
          <a href={github.link}>
            <Github width={width} height={height} /> {github.user}
          </a>
        </div>
        <div className={contactStyles.item}>
          <a href={github.link}>
            <Linkedin width={width} height={height} /> {linkedin.user}
          </a>
        </div>
        <div className={contactStyles.item}>
          <a href={github.link}>
            <Youtube width={width} height={height} /> {youtube.user}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

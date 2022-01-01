import styles from "../styles/Footer.module.css";

import { Envelope, Github, Linkedin, Youtube } from "react-bootstrap-icons";

const Footer = ({ contactInfo }) => {
  const { firstName, lastName, email, phone } = contactInfo;
  const { github, linkedin, youtube } = contactInfo.social;

  const width = "32";
  const height = "32";

  return (
    <footer id={styles.footer}>
      <div className={styles.plugs}>
        <a href={`mailto:${email}`} target="_blank">
          <Envelope width={width} height={height} />
        </a>
        <a href={github.link} target="_blank">
          <Github width={width} height={height} />
        </a>
        <a href={linkedin.link} target="_blank">
          <Linkedin width={width} height={height} />
        </a>
        <a href={youtube.link} target="_blank">
          <Youtube width={width} height={height} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

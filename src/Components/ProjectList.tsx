import { useState } from "react";

import Card from "react-bootstrap/Card";
import OverLayTrigger from "react-bootstrap/OverlayTrigger";
import OverLay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CodeSlash, ChevronRight } from "react-bootstrap-icons";

import styles from "../styles/ProjectsView.module.css";
import card from "../styles/card.module.css";

import _ from "lodash";
import { getTechPic } from "../utils";

const ProjectList = ({ projects, id }) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const renderTech = (techStack) => {
    return _.map(techStack, (tech) => {
      const techPic = getTechPic(tech);
      return techPic ? (
        <OverLayTrigger
          key={tech}
          placement='top'
          overlay={<Tooltip id={`tooltip-${tech}`}>{tech}</Tooltip>}>
          <span className={styles.techPic}>{techPic()}</span>
        </OverLayTrigger>
      ) : null;
    });
  };

  const renderSrc = (src) => {
    const renderLinkButtons = () => {
      return _.map(src, (link, index) => {
        return (
          <a key={`src-${index}`} href={link}>
            <Button>Source {index + 1}</Button>;
          </a>
        );
      });
    };

    if (Array.isArray(src)) {
      return (
        <div className={card.linkWrapper}>
          <Card.Link
            target='_blank'
            className={card.link}
            onClick={handleClick}
            style={{ cursor: "pointer" }}>
            Check it out
            <ChevronRight />
          </Card.Link>
          <OverLay target={target} show={show} placement='top'>
            <Popover id=''>
              <Popover.Content>
                <ButtonGroup>{renderLinkButtons()}</ButtonGroup>
              </Popover.Content>
            </Popover>
          </OverLay>
        </div>
      );
    }
    return (
      <div className={card.linkWrapper}>
        <Card.Link href={src} target='_blank' className={card.link}>
          Check it out
          <ChevronRight />
        </Card.Link>
      </div>
    );
  };

  const renderList = () => {
    return _.map(projects, (project) => {
      return (
        <div key={project.title} className={styles.item}>
          <Card className={card.card}>
            <Card.Body>
              <Card.Title className={card.title}>{project.title}</Card.Title>
              <Card.Text>{project.summary}</Card.Text>
              <div className={styles.bottom}>
                <span>{renderTech(project.tech)}</span>
                {renderSrc(project.src)}
                <div className={card.linkWrapper}>
                  <Card.Link
                    href={project.src}
                    target='_blank'
                    className={card.link}>
                    <CodeSlash /> View Source
                  </Card.Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  return <div id={id}> {renderList()}</div>;
};

export default ProjectList;

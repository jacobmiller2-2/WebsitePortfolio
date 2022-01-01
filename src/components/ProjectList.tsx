import { useState } from "react";

import Card from "react-bootstrap/Card";
import OverLayTrigger from "react-bootstrap/OverlayTrigger";
import OverLay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CodeSlash, ChevronRight } from "react-bootstrap-icons";

import LinkDropdownToggle from "./LinkDropdownToggle";
import LinkDropdownMenu from "./LinkDropdownMenu";

import styles from "styles/ProjectsView.module.css";
import listStyles from "styles/ProjectList.module.css";
import card from "styles/card.module.css";

import _ from "lodash";
import { getTechPic } from "../utils";
import { Dropdown } from "react-bootstrap";

const ProjectList = ({ projects, id }) => {
  const [show, setShow] = useState(null);
  const [target, setTarget] = useState(null);

  const handleClick = (event, name) => {
    if (show) {
      setShow(null);
    } else {
      setShow(name);
    }
    setTarget(event.target);
  };

  const renderTech = (techStack: [string]) => {
    return _.map(techStack, (tech) => {
      const techPic = getTechPic(tech);
      return techPic ? (
        <OverLayTrigger
          key={tech}
          placement="top"
          overlay={<Tooltip id={`tooltip-${tech}`}>{tech}</Tooltip>}
        >
          <span className={styles.techPic}>{techPic()}</span>
        </OverLayTrigger>
      ) : null;
    });
  };

  const renderSrc = (src, name) => {
    const renderLinks = () => {
      return _.map(src, (link, index) => {
        return (
          <Dropdown.Item key={`src-${index}`} href={link} target="_blank">
            <CodeSlash /> Source {index + 1}
          </Dropdown.Item>
        );
      });
    };

    if (!src.length || src.length === 0) {
      return null;
    }

    if (src.length > 1) {
      return (
        <div className={card.linkWrapper}>
          <Dropdown>
            <Dropdown.Toggle as={LinkDropdownToggle}>
              <Card.Link
                target="_blank"
                className={card.link}
                onClick={(e) => handleClick(e, name)}
                style={{ cursor: "pointer" }}
              >
                <CodeSlash /> View Source
              </Card.Link>
            </Dropdown.Toggle>

            <Dropdown.Menu
              as={LinkDropdownMenu}
              className={listStyles.srcDropdown}
            >
              {renderLinks()}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      );
    }
    return (
      <div className={card.linkWrapper}>
        <Card.Link href={src} target="_blank" className={card.link}>
          <CodeSlash /> View Source
        </Card.Link>
      </div>
    );
  };

  const renderList = () => {
    return _.map(projects, (project) => {
      return (
        <div key={project.title} className={styles.item}>
          <Card className={card.card}>
            <Card.Body className={card["card-body"]}>
              <Card.Title className={card.title}>{project.title}</Card.Title>
              <Card.Text className={card["card-text"]}>
                {project.summary}
              </Card.Text>
              <div className={styles.bottom}>
                <span className={styles["tech-row"]}>
                  {renderTech(project.tech)}
                </span>
                <div className={card.linkWrapper}>
                  <Card.Link
                    href={project.projectLink}
                    target="_blank"
                    className={card.link}
                  >
                    Check it out
                    <ChevronRight />
                  </Card.Link>
                </div>
                {renderSrc(project.src, project.title)}
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

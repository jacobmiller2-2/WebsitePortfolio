import Card from "react-bootstrap/Card";
import OverLayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import styles from "../styles/ProjectsView.module.css";
import card from "../styles/card.module.css";
import { CodeSlash, ChevronRight } from "react-bootstrap-icons";

import _ from "lodash";
import { getTechPic } from "../utils";

const ProjectList = ({ projects, id }) => {
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
                <div className={card.linkWrapper}>
                  <Card.Link href='#' className={card.link}>
                    Check it out
                    <ChevronRight />
                  </Card.Link>
                </div>
                <div className={card.linkWrapper}>
                  <Card.Link href='#' className={card.link}>
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

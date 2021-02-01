import Card from "react-bootstrap/Card";

import styles from "../styles/ProjectsView.module.css";
import card from "../styles/card.module.css";
//@ts-ignore
import _ from "lodash";

const ProjectList = ({ projects, id }) => {
  const renderList = () => {
    return _.map(projects, (project) => {
      return (
        <div className={styles.item}>
          <Card key={project.title} className={card.card}>
            <Card.Body>
              <Card.Title className={card.title}>{project.title}</Card.Title>
              <Card.Subtitle className={card.subtitle}>
                This is my subtitle
              </Card.Subtitle>
              <Card.Text>IDK yet</Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  return <div id={id}> {renderList()}</div>;
};

export default ProjectList;

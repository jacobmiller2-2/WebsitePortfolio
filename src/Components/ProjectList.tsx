import Card from "react-bootstrap/Card";

//@ts-ignore
import _ from "lodash";

const ProjectList = ({ projects }) => {
  return _.map(projects, (project) => {
    return (
      <Card>
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>IDK yet</Card.Text>
        </Card.Body>
      </Card>
    );
  });
};

export default ProjectList;

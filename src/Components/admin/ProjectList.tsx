import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import _ from "lodash";

const ProjectList = ({ projects }) => {
  const renderProjects = () => {
    return _.map(projects, (project) => {
      return (
        <Card>
          <Card.Title>{project.title}</Card.Title>
        </Card>
      );
    });
  };

  return <Container>fds{renderProjects()}</Container>;
};

export default ProjectList;

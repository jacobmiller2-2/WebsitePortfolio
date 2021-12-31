import Head from "next/head";

import Header from "../../Views/HeaderView";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ProjectList from "../../Components/admin/ProjectList";

import projects from "../api/projects";

const dashboard = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Admin Auth</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Authentication for Jacob Miller's portfolio."
          key="title"
        />
      </Head>
      <div>
        <div id="top-stripe"></div>
        <Header />
        <Container>
          <Button onClick={() => console.log("fdsnfjsbfkjsd")}>fsdf</Button>
          <ProjectList projects={projects} />
        </Container>
      </div>
    </>
  );
};

export default dashboard;

export async function getStaticProps() {
  return {
    props: {
      projects: JSON.parse(await projects()),
    },
  };
}

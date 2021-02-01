import Head from "next/head";
import styles from "../styles/Home.module.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import IntroView from "../Views/IntroView.tsx";
import ProjectsView from "../Views/ProjectsView.tsx";

import Container from "react-bootstrap/Container";

export default function Home() {
  return (
    <Container className="container">
      <Head>
        <title>Jacob Miller</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IntroView />
      <ProjectsView />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </Container>
  );
}

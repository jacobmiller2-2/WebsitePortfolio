import React from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";

import IntroView from "views/IntroView";
import ProjectsView from "views/ProjectsView";
import AboutView from "views/AboutView";
import FooterView from "views/FooterView";

import styles from "styles/Home.module.css";
/** Data */
import { getHero } from "lib/contentApi";

/** Components */
import Main from "layouts/Main";
import { ExperienceView, IndexView, Topbar } from "views";
import { Container, Box, VStack } from "@chakra-ui/react";

interface IndexPageProps {
  hero: any;
}

export const IndexPage = ({ hero }: IndexPageProps) => {
  return (
    <Main>
      <Box bg="paper.default">
        <Topbar />
        <VStack>
          <IndexView id="" hero={hero} />
          <ExperienceView experience={[]} id="experience" />
        </VStack>
      </Box>
    </Main>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const hero = await getHero();

  const heroProps = { ...hero.data };

  return {
    props: { hero: heroProps },
    revalidate: 60,
  };
};

const contactInfo = {
  firstName: "Jacob",
  lastName: "Miller",
  email: "jacobmillerdev@gmail.com",
  phone: "",
  social: {
    github: {
      user: "jacobmiller22",
      link: "https://github.com/jacobmiller22",
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

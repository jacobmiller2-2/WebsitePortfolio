import React from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
/** Data */
import {
  getExperience,
  getExperienceMeta,
  getHero,
  getProjectMeta,
  getProjects,
} from "lib/contentApi";

/** Components */
import Main from "layouts/Main";
import { IndexView, ExperienceView, ProjectsView, Topbar } from "views";
import { Box, VStack } from "@chakra-ui/react";
import {
  IExperience,
  IExperienceMeta,
  IHero,
  IProject,
  IProjectMeta,
} from "interfaces/Prismic";
import exp from "constants";

interface IndexPageProps {
  hero: IHero;
  experience: IExperience[];
  experienceMeta: IExperienceMeta;
  projects: IProject[];
  projectMeta: IProjectMeta;
}

export const IndexPage = ({
  hero,
  experience = [],
  experienceMeta,
  projects = [],
  projectMeta,
}: IndexPageProps) => {
  return (
    <Main>
      <Box bg="paper.default" maxW="100vw">
        <Topbar />
        <VStack>
          <IndexView id="" hero={hero} />
          <ExperienceView
            experience={experience}
            meta={experienceMeta}
            id="experience"
          />
          <ProjectsView projects={projects} meta={projectMeta} id="projects" />
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

  const experience = await getExperience();

  const experienceMeta = await getExperienceMeta();

  const projects = await getProjects();

  const projectMeta = await getProjectMeta();

  return {
    props: {
      hero: hero.data,
      experience: experience.map((exp) => ({ id: exp.id, ...exp.data })),
      experienceMeta: experienceMeta.data,
      projects: projects.map((proj) => ({ id: proj.id, ...proj.data })),
      projectMeta: projectMeta.data,
    },
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

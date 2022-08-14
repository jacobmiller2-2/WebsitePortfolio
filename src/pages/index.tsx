import React from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
/** Data */
import {
  getContact,
  getExperience,
  getExperienceMeta,
  getHero,
  getProjectMeta,
  getProjects,
} from "lib/contentApi";

/** Components */
import Main from "layouts/Main";
import {
  IndexView,
  ExperienceView,
  ProjectsView,
  Topbar,
  ContactView,
} from "views";
import { Box, VStack } from "@chakra-ui/react";
import {
  IContact,
  IExperience,
  IExperienceMeta,
  IHero,
  IProject,
  IProjectMeta,
} from "interfaces/Prismic";

interface IndexPageProps {
  hero: IHero;
  experience: IExperience[];
  experienceMeta: IExperienceMeta;
  projects: IProject[];
  projectMeta: IProjectMeta;
  contact: IContact;
}

export const IndexPage = ({
  hero,
  experience = [],
  experienceMeta,
  projects = [],
  projectMeta,
  contact,
}: IndexPageProps) => {
  return (
    <Main socials={contact.socials}>
      <IndexView id="" hero={hero} />
      <ExperienceView
        experience={experience}
        meta={experienceMeta}
        id="experience"
      />
      <ProjectsView projects={projects} meta={projectMeta} id="projects" />
      <ContactView id="contact" contact={contact} />
    </Main>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async (
  ctx: GetStaticPropsContext
) => {
  const hero: any | undefined = await getHero();

  const experience: any[] = await getExperience();

  const experienceMeta: any | undefined = await getExperienceMeta();

  const projects: any[] = await getProjects();

  const projectMeta: any | undefined = await getProjectMeta();

  const contact: any | undefined = await getContact();

  return {
    props: {
      hero: hero?.data,
      experience: experience.map((exp) => ({ id: exp.id, ...exp.data })),
      experienceMeta: experienceMeta?.data,
      projects: projects.map((proj) => ({ id: proj.id, ...proj.data })),
      projectMeta: projectMeta?.data,
      contact: contact?.data,
    },
    revalidate: 60,
  };
};

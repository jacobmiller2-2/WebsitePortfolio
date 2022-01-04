import React from "react";
import { GetStaticProps, GetStaticPropsContext } from "next";
/** Data */
import { getExperience, getExperienceMeta, getHero } from "lib/contentApi";

/** Components */
import Main from "layouts/Main";
import { IndexView, ExperienceView, Topbar } from "views";
import { Box, VStack } from "@chakra-ui/react";
import { IExperience, IExperienceMeta, IHero } from "interfaces/Prismic";
import exp from "constants";

interface IndexPageProps {
  hero: IHero;
  experience: IExperience[];
  experienceMeta: IExperienceMeta;
}

export const IndexPage = ({
  hero,
  experience = [],
  experienceMeta,
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

  return {
    props: {
      hero: hero.data,
      experience: experience.map((exp) => ({ id: exp.id, ...exp.data })),
      experienceMeta: experienceMeta.data,
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

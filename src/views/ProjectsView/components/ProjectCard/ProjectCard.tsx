import Image from "next/image";

/** Interfaces/types */

import { IProject } from "interfaces/Prismic";

/** components */
import { CardBasic, TechItems } from "components";
import { Heading, Text, Box, Divider, HStack } from "@chakra-ui/react";
import SliceMachine from "components/SliceMachine";

interface IProjectCardProps {
  project: IProject;
  alt?: Boolean;
}

const ProjectCard = ({ project, alt = true }: IProjectCardProps) => {
  const dateOptions = {
    year: "numeric",
    month: "long",
  };

  const creationDate: string = new Date(project.creation_date).toLocaleString(
    "en-US",
    //@ts-ignore
    dateOptions
  );

  const renderContent = () => {
    const cardMargin = {
      marginRight: alt ? "initial" : "-3rem",
      marginLeft: alt ? "-3rem" : "initial",
    };

    const ProjectBody = (
      <Box
        display="flex"
        flexDir="column"
        alignItems={alt ? "flex-start" : "flex-end"}
        width="100%"
        key="project-body"
      >
        {project.is_featured && <Text variant="accent">Featured Project</Text>}
        <Heading as="h3" size="md">
          {project.project_name}
        </Heading>

        <Box
          display="flex"
          flexDir={["column", "column", "row", "row"]}
          columnGap="1rem"
          marginTop="0.5rem"
          // alignItems={["center", "center", "center", "center"]}
        >
          <Box>
            <Text variant="secondary" marginTop=".5rem" as="span">
              {creationDate}
            </Text>
          </Box>
          <Box>
            <Divider orientation="vertical" />
          </Box>
          <Box>
            <Text variant="secondary" marginTop=".5rem" as="span">
              {project.latest_version}
            </Text>
          </Box>
        </Box>
        {project.body && project.body.length > 0 && (
          <CardBasic marginInline="0" maxW="100%" zIndex="1" {...cardMargin}>
            {SliceMachine({
              slices: project.body,
              options: { Text: { variant: "soft" } },
            })}
          </CardBasic>
        )}
        <Box
          display="flex"
          flexDir="row"
          justifyContent={alt ? "flex-end" : "flex-start"}
        >
          {/* {TechItems({ techs: project.tech_stack.map(({ tech }) => tech) })} */}
          {TechItems({
            techs: ["react", "rust", "vue", "nodejs"],
          })}
        </Box>
      </Box>
    );

    const picture = project.picture_src;
    const ProjectImage = (
      <Box width="100%" key="project-image">
        <Image
          src={
            picture.url ??
            "https://www.valpo.edu/theology/files/2016/02/640x360.png"
          }
          alt={project.picture_alt}
          width={picture.width}
          height={picture.height}
          layout="responsive"
        />
        <Text>{project.picture_alt}</Text>
      </Box>
    );

    const Content = [ProjectBody, ProjectImage];

    return alt ? Content.reverse() : Content;
  };

  return (
    <HStack alignItems="flex-start" width="100%" margin="2rem 0 !important">
      {renderContent()}
    </HStack>
  );
};

export default ProjectCard;

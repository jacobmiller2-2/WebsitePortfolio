// import Image from "next/image";

/** Interfaces/types */

import { IProject } from "interfaces/Prismic";

/** components */
import { CardBasic, TechItems, Image } from "components";
import {
  Heading,
  Text,
  Box,
  Divider,
  HStack,
  Icon,
  LinkBox,
  LinkOverlay,
  Link,
  As,
} from "@chakra-ui/react";
import SliceMachine from "components/SliceMachine";
import { Github, External, IconList, Docker } from "components/Icons";

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
      marginRight: alt ? "initial" : ["0rem", "-1rem", "-1.5rem", "-3rem"],
      marginLeft: alt ? ["0rem", "-1rem", "-1.5rem", "-3rem"] : "initial",
    };

    let linkMap = {};
    linkKeys.forEach((key) => {
      linkMap[key] = project.links.find((link) => link.platform === key)?.link;
    });

    const ProjectBody = (
      <Box
        display="flex"
        flexDir="column"
        alignItems={alt ? "flex-start" : "flex-end"}
        width="100%"
        maxW={"100%"}
        height="100%"
        key="project-body"
        marginInlineStart={["0rem !important", "0.5rem !important"]}
      >
        {project.is_featured && <Text variant="accent">Featured Project</Text>}
        <Heading as="h3" size="md">
          {project.project_name}
        </Heading>

        <Box
          display="flex"
          flexDir={["row", "row", "row", "row"]}
          columnGap="1rem"
          marginTop="0.5rem"
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

            <Box
              display="flex"
              flexDir="row"
              justifyContent="space-between"
              mt="3"
            >
              <IconList justifyContent={!alt ? "flex-end" : "flex-start"}>
                {linkMap["github"] && (
                  <LinkBox>
                    <LinkOverlay
                      href={linkMap["github"]?.url}
                      target={linkMap["github"]?.target}
                    >
                      <Icon as={Github(24) as As<() => JSX.Element>} />
                    </LinkOverlay>
                  </LinkBox>
                )}

                {linkMap["project"] && (
                  <LinkBox>
                    <LinkOverlay
                      href={linkMap["project"]?.url}
                      target={linkMap["project"]?.target}
                    >
                      <Icon as={External(24) as As<() => JSX.Element>} />
                    </LinkOverlay>
                  </LinkBox>
                )}
                {linkMap["docker"] && (
                  <LinkBox>
                    <LinkOverlay
                      href={linkMap["docker"]?.url}
                      target={linkMap["docker"]?.target}
                    >
                      <Icon as={Docker(24) as As<() => JSX.Element>} />
                    </LinkOverlay>
                  </LinkBox>
                )}
              </IconList>
              <Box
                display="flex"
                flexDir="row"
                justifyContent={alt ? "flex-end" : "flex-start"}
              >
                {TechItems({
                  techs: project.tech_stack.map(({ tech }) => tech),
                })}
              </Box>
            </Box>
          </CardBasic>
        )}
      </Box>
    );

    const picture = project.picture_src;
    const ProjectImage = (
      <Box
        display={["none", "flex", "flex", "flex"]}
        width="100%"
        height="100%"
        key="project-image"
        alignItems="center"
        flexDir="column"
        alignSelf="center"
      >
        <Image
          src={picture.url}
          alt={project.picture_alt}
          altText={project.project_name}
          width={picture.width}
          height={picture.height}
        />
      </Box>
    );

    const Content = [ProjectBody, ProjectImage];

    return alt ? Content.reverse() : Content;
  };

  return (
    <HStack
      alignItems="flex-start"
      width="100%"
      height="max-content"
      margin="2rem 0 !important"
    >
      {renderContent()}
    </HStack>
  );
};

export default ProjectCard;

const linkKeys: ("github" | "project" | "docker")[] = [
  "github",
  "project",
  "docker",
];

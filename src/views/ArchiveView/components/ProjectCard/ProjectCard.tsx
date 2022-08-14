import { IProject } from "lib/interfaces/Prismic";

/** Components */
import { Box, Text, Heading, Divider, Spacer } from "@chakra-ui/react";
import { TechItems } from "lib/components";
import SliceMachine from "lib/components/SliceMachine";

type ProjectCardProps = {
  project: IProject;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { project_name, tech_stack, is_featured, body } = project;

  return (
    <Box
      display="flex"
      border="1px solid"
      borderColor="card.light"
      bgColor="card.default"
      borderRadius="4px"
      p="5"
      m="2"
      minW="100%"
    >
      <Box display="flex" flexDir="column">
        {is_featured && <Text variant="accent">Featured Project</Text>}

        <Heading size="sm" mr="2">
          {project_name}
        </Heading>

        <Box mb="2">
          {SliceMachine({
            slices: body,
            options: { Text: { variant: "soft" } },
          })}
        </Box>
        <Box display="flex" flexDir="row">
          {TechItems({
            techs: tech_stack.map(({ tech }) => tech),
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;

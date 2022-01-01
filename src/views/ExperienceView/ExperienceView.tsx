/** Interfaces/types */

/** Components */
import {
  Container,
  VStack,
  Heading,
  Tag,
  HStack,
  Flex,
  Box,
} from "@chakra-ui/react";

interface IExperienceViewProps {
  experience: any;
  [rest: string]: any;
}

const ExperienceView = ({ experience, ...rest }: IExperienceViewProps) => {
  return (
    <Container maxW="container.lg" {...rest}>
      <VStack spacing={2} align="flex-start">
        <Heading as="h2" size="xl">
          My Experience
        </Heading>
      </VStack>
    </Container>
  );
};

export default ExperienceView;

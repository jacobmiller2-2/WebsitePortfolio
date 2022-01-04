/** Interfaces/types */

/** Components */
import {
  Container,
  VStack,
  Heading,
  Text,
  HStack,
  Flex,
  Box,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import AtomMachine from "components/AtomMachine";
import { IExperience, IExperienceMeta } from "interfaces/Prismic";
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";

interface IExperienceViewProps {
  experience: IExperience[];
  meta: IExperienceMeta;
  [rest: string]: any;
}

const ExperienceView = ({
  experience,
  meta,
  ...rest
}: IExperienceViewProps) => {
  // console.log(meta.experience_order);

  const renderCurrPositions = () => {
    const items = getExperienceFromOrder(experience, meta.experience_order);

    // const currPositions = items.filter((item) => item.active);

    return items.map((item, i: number) => {
      return <ExperienceCard experience={item} key={`experience-card-${i}`} />;
    });
  };

  return (
    <Container maxW="container.lg" h="100vh" {...rest}>
      <VStack spacing={2} align="flex-start" justifyContent="flex-start">
        <HStack
          w="100%"
          align="center"
          justifyContent="center"
          marginBottom="3rem"
        >
          <Heading as="h2" size="xl">
            My Experience
          </Heading>
        </HStack>

        {renderCurrPositions()}
      </VStack>
    </Container>
  );
};

export default ExperienceView;

const getExperienceFromOrder = (
  experience: IExperience[],
  order: IExperienceMeta["experience_order"]
) => {
  return order.map(({ experience: item }, i: number) => {
    return experience.find((exp) => exp.id === item.id);
  });
};

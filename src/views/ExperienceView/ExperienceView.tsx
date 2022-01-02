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
  console.log(meta.experience_order);

  const renderTabListItems = () => {
    const items = getExperienceFromOrder(experience, meta.experience_order);

    return items.map((item, i: number) => {
      return <Tab key={`experience-tab-${i}`}>{item.entity_short_name}</Tab>;
    });
  };

  const renderTabPanelItems = () => {
    const items = getExperienceFromOrder(experience, meta.experience_order);

    return items.map((item, i: number) => {
      return (
        <TabPanel key={`experience-item-${i}`}>
          {AtomMachine({ atoms: item.description })}
        </TabPanel>
      );
    });
  };

  return (
    <Container maxW="container.lg" h="100vh" {...rest}>
      <VStack spacing={2} align="flex-start">
        <Heading as="h2" size="xl">
          My Experience
        </Heading>
        <HStack>
          <Tabs isFitted size="lg">
            <TabList>{renderTabListItems()}</TabList>
            <TabPanels>{renderTabPanelItems()}</TabPanels>
          </Tabs>
        </HStack>
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

import { useState } from "react";

/** Interfaces/types */

/** Components */
import {
  Container,
  VStack,
  Heading,
  Text,
  HStack,
  Button,
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
  const [showOther, setShowOther] = useState(false);

  const items = getExperienceFromOrder(experience, meta.experience_order);

  const relExperience = items.filter((item) => !item.is_other);

  const otherExperience = items.filter((item) => item.is_other);

  const renderRelevantExperience = () =>
    relExperience.map((item, i: number) => (
      <ExperienceCard experience={item} key={`experience-card-${i}`} />
    ));

  const renderOtherExperience = () =>
    otherExperience.map((item, i: number) => (
      <ExperienceCard experience={item} key={`experience-card-${i}`} />
    ));

  return (
    <Container
      maxW="container.lg"
      h={["100%", "100%", "100vh", "100vh"]}
      mh="100vh"
      {...rest}
    >
      <VStack spacing={2} align="flex-start" justifyContent="flex-start">
        <HStack
          w="100%"
          align="center"
          justifyContent="center"
          marginBottom="3rem"
        >
          <Heading as="h2" size="xl">
            {meta.experience_view_title || "My Experience"}
          </Heading>
        </HStack>
        {renderRelevantExperience()}
        <HStack w="100%" justifyContent="center">
          {!showOther && otherExperience.length > 0 && (
            <Button onClick={() => setShowOther(true)}>
              Show Other Work Experience
            </Button>
          )}
        </HStack>
        {showOther && renderOtherExperience()}
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

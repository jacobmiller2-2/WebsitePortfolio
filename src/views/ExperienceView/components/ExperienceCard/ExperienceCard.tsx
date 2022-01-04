/** Interfaces/types */

/** Components */
import { CardBasic } from "components";
import { Heading, Text, Box, Divider } from "@chakra-ui/react";
import { IExperience } from "interfaces/Prismic";
import SliceMachine from "components/SliceMachine";

interface IExperienceCardProps {
  experience: IExperience;
}

const ExperienceCard = ({ experience }: IExperienceCardProps) => {
  const dateOptions = {
    year: "numeric",
    month: "long",
  };

  const startDate: string = new Date(experience.start_date).toLocaleString(
    "en-US",
    //@ts-ignore
    dateOptions
  );
  const endDate: string = experience.active
    ? "Present"
    : //@ts-ignore
      new Date(experience.end_date).toLocaleString("en-US", dateOptions);

  return (
    <Box>
      <Text variant="accent">
        {!experience.is_other ? "Featured Experience" : ""}
      </Text>
      <Heading as="h3" size="md">
        {experience.job_title}
      </Heading>

      <Box
        display="flex"
        flexDir={["column", "column", "row", "row"]}
        columnGap="1rem"
        marginTop="0.5rem"
      >
        <Box>
          <Text variant="secondary" marginTop=".5rem" as="span">
            {experience.entity_name}
          </Text>
        </Box>
        <Box>
          <Divider orientation="vertical" />
        </Box>
        <Box>
          <Text variant="secondary" marginTop=".5rem" as="span">
            {startDate} ― {endDate}
          </Text>
        </Box>
      </Box>
      {experience.body && experience.body.length > 0 && (
        <CardBasic marginInline="0" maxW="85%" paddingLeft="3rem">
          {SliceMachine({
            slices: experience.body,
            options: { Text: { variant: "soft" } },
          })}
        </CardBasic>
      )}
    </Box>
  );
};

export default ExperienceCard;

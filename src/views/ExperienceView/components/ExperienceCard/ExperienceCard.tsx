/** Interfaces/types */

/** Components */
import { CardBasic } from "lib/components";
import { Heading, Text, Box, Divider } from "@chakra-ui/react";
import SliceMachine from "lib/components/SliceMachine";
import { IExperience } from "lib/interfaces/Prismic";

interface IExperienceCardProps {
  experience: IExperience;
  [rest: string]: any;
}

const ExperienceCard = ({ experience, ...rest }: IExperienceCardProps) => {
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
    <Box w="100%">
      {!experience.is_other && (
        <Text variant="accent">Featured Experience</Text>
      )}
      <Heading as="h3" size="md">
        {experience.job_title}
      </Heading>

      <Box
        display="flex"
        flexDir={["column", "column", "row", "row"]}
        columnGap="1rem"
        marginTop="0.5rem"
        {...rest}
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
        <CardBasic marginInline="0" maxW={["100%", "100%", "85%", "85%"]}>
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

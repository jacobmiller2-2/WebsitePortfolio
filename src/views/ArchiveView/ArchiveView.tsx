/** Components */
import { Container, Text, VStack } from "@chakra-ui/react";
import { Heading } from "lib/components";
import { IProject } from "lib/interfaces/Prismic";
import React from "react";
import { isSameYear } from "lib/utils";
import { ProjectCard } from "./components";

type ArchiveViewProps = {
  projects: IProject[];
  [rest: string]: any;
};

const ArchiveView = ({ projects, ...rest }: ArchiveViewProps) => {
  const sortedProjects = projects.sort(
    (a: IProject, b: IProject) =>
      new Date(b.creation_date).getTime() - new Date(a.creation_date).getTime()
  );

  const renderProjects = () => {
    let prevPeriod = null;
    return sortedProjects.map((project: IProject) => {
      const { creation_date } = project;
      const period = new Date(creation_date);
      let PeriodHeading = null;
      if (!isSameYear(period, prevPeriod)) {
        prevPeriod = period;
        PeriodHeading = (
          <Heading
            label={period.toLocaleDateString("en-US", {
              year: "numeric",
              // month: "long",
            })}
          />
        );
      }

      return (
        <React.Fragment key={project.id}>
          {PeriodHeading}
          <ProjectCard project={project} />
        </React.Fragment>
      );
    });
  };

  return (
    <Container
      maxW="container.lg"
      display="flex"
      alignItems="center"
      h={["100%", "100%", "100vh", "100vh"]}
      mh="100vh"
      {...rest}
    >
      {/* <Heading label="March 2022" /> */}
      <VStack alignItems="flex-start">{renderProjects()}</VStack>
    </Container>
  );
};

export default ArchiveView;

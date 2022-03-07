import { Heading as Heading, Divider, Box } from "@chakra-ui/react";

type StyledHeadingProps = {
  label: string;
};

const StyledHeading = ({ label }: StyledHeadingProps) => {
  return (
    <Box maxW="100%" w="fit-content">
      <Heading pr="3rem">{label}</Heading>;
      <Divider />
    </Box>
  );
};

export default StyledHeading;

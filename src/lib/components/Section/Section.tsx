import { Container } from "@chakra-ui/react";

const Section = ({ children, ...rest }) => {
  return (
    <Container
      maxW="container.lg"
      display="flex"
      alignItems="center"
      h={["100%", "100%", "100%", "100%"]}
      minHeight="100vh"
      marginBottom="108px !important"
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Section;

/** Components */
import { Container } from "@chakra-ui/react";
import styles from "./ViewLayout.module.css";

const ViewLayout = ({ children, ...rest }) => {
  return (
    <Container
      maxW={["100vw", "container.lg"]}
      display="flex"
      alignItems="center"
      h="100%"
      minH="100vh"
      {...rest}
      className={styles["container"]}
    >
      {children}
    </Container>
  );
};

export default ViewLayout;

import React from "react";
/** Interfaces/types */

/** Components */
import { Flex } from "@chakra-ui/react";

interface INavContainerProps {
  children: React.ReactNode[] | React.ReactNode;
  [rest: string]: any;
}

const NavContainer = ({ children, ...rest }: INavContainerProps) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default NavContainer;

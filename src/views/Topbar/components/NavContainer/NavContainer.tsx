import React from "react";
import useScroll from "hooks/useScroll";
/** Interfaces/types */

/** Components */
import { Flex } from "@chakra-ui/react";

interface INavContainerProps {
  children: React.ReactNode[] | React.ReactNode;
  [rest: string]: any;
}

const NavContainer = ({ children, ...rest }: INavContainerProps) => {
  const { scrollTop } = useScroll();

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
      pos="fixed"
      top={0}
      transition="all 0.3s ease-in"
      opacity={scrollTop > TOLERANCE ? 0 : 1}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default NavContainer;

const TOLERANCE = 75;

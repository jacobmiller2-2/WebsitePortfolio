/** Interfaces/types */

/** Components */
import { Box, Text, Link } from "@chakra-ui/react";

interface ILogoProps {
  [rest: string]: any;
}

const Logo = ({ ...rest }: ILogoProps) => {
  return (
    <Box {...rest}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  );
};

export default Logo;

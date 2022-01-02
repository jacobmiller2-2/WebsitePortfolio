/** Interfaces/types */

/** Components */
import { Box, Text, Link } from "@chakra-ui/react";
import Image from "next/image";

interface ILogoProps {
  [rest: string]: any;
}

const Logo = ({ ...rest }: ILogoProps) => {
  return (
    <Box {...rest}>
      <Image src="/portfolio_logo_v5.svg" alt="Logo" width="42" height="42" />
    </Box>
  );
};

export default Logo;

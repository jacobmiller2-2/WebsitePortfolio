/** Interfaces/types */

/** Components */
import { Box } from "@chakra-ui/react";

interface ICardBasicProps {
  children: React.ReactNode | React.ReactNode[];
  [rest: string]: any;
}

const CardBasic = ({ children, ...rest }: ICardBasicProps) => {
  return (
    <Box bgColor="card.default" m="1rem" p="2rem" fontSize="1.25rem" {...rest}>
      {children}
    </Box>
  );
};

export default CardBasic;

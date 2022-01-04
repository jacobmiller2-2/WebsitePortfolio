/** Interfaces/types */

/** Components */
import { Box, Divider } from "@chakra-ui/react";

interface ICardProps {
  children: React.ReactNode | React.ReactNode[];
  Header: React.ReactNode;
  Subheader?: React.ReactNode;
  Tag?: React.ReactNode;
  Footer?: React.ReactNode;
}

const Card = ({ children, Header, Subheader, Tag, Footer }: ICardProps) => {
  return (
    <Box
      bgColor="card.default"
      p="1rem"
      m="1rem"
      display="flex"
      w="100%"
      borderRadius="8px"
      borderColor="card.light"
      borderWidth="1px"
      flexDir="column"
    >
      <Box
        w="100%"
        display="flex"
        flexDir="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Box>{Header}</Box>
          <Box>{Subheader}</Box>
        </Box>
        {Tag && <Box>{Tag}</Box>}
      </Box>
      <Box m=".5rem">
        <Divider orientation="horizontal" />
      </Box>
      <Box w="100%">{children}</Box>
      {Footer && <Box>{Footer}</Box>}
    </Box>
  );
};

export default Card;

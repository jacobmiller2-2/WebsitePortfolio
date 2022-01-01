/** Components */
import {
  Container,
  VStack,
  Heading,
  Tag,
  HStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import AtomMachine from "components/AtomMachine";

interface IndexViewProps {
  hero: any;
  [rest: string]: any;
}

const IndexView = ({ hero, ...rest }: IndexViewProps) => {
  const renderTags = (tags: any[]): React.ReactNode[] => {
    return tags.map(({ tag }: any, i: number) => {
      return (
        <Tag key={`tag-${i}`} whiteSpace="nowrap" minW="fit-content">
          {tag}
        </Tag>
      );
    });
  };

  return (
    <Container maxW="container.lg" {...rest}>
      <VStack spacing={2} align="flex-start" maxW="100%">
        <Heading as="h6" size="md">
          Welcome, my name is
        </Heading>
        <Heading as="h1" size="4xl">
          {hero.name}.
        </Heading>

        <HStack
          maxW="100%"
          marginTop="1rem !important"
          overflowX="scroll"
          css={{
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
          }}
        >
          {renderTags(hero.tags)}
        </HStack>
        <br />
        <Box maxW="1200px">{AtomMachine({ atoms: hero.introduction })}</Box>
      </VStack>
    </Container>
  );
};
export default IndexView;

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
  console.log(hero);

  const renderTags = (tags: any[]): React.ReactNode[] => {
    return tags.map(({ tag }: any, i: number) => {
      return (
        <Tag key={`tag-${i}`} marginInlineStart={i > 0 ? "0.5rem" : "0px"}>
          {tag}
        </Tag>
      );
    });
  };

  return (
    <Container maxW="container.lg" {...rest}>
      <VStack spacing={2} align="flex-start">
        <Heading as="h6" size="md">
          Welcome, my name is
        </Heading>
        <Heading as="h1" size="4xl">
          {hero.name}.
        </Heading>

        <Flex marginTop="1rem !important">{renderTags(hero.tags)}</Flex>
        <br />
        <Box maxW="1200px">{AtomMachine({ atoms: hero.introduction })}</Box>
      </VStack>
    </Container>
  );
};
export default IndexView;

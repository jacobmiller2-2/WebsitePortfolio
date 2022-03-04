import Head from "next/head";

/** Interfaces/Types */
import { IHero } from "interfaces/Prismic";

/** Components */
import {
  Container,
  VStack,
  Heading,
  Tag,
  HStack,
  LinkBox,
  LinkOverlay,
  Box,
  Button,
} from "@chakra-ui/react";
import AtomMachine from "components/AtomMachine";

interface IndexViewProps {
  hero: IHero;
  [rest: string]: any;
}

const IndexView = ({ hero, ...rest }: IndexViewProps) => {
  const renderTags = (tags: { tag: string }[]): React.ReactNode[] => {
    return tags.map(({ tag }: { tag: string }, i: number) => {
      return (
        <Tag key={`tag-${i}`} whiteSpace="nowrap" minW="fit-content">
          {tag}
        </Tag>
      );
    });
  };

  return (
    <Container
      maxW="container.lg"
      display="flex"
      alignItems="center"
      h={["100%", "100%", "100vh", "100vh"]}
      mh="100vh"
      {...rest}
    >
      <Head>
        <title>Jacob Miller</title>
      </Head>
      <VStack spacing={2} align="flex-start" maxW="100%">
        <Heading as="h6" size="sm">
          {hero.prelude}
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
            msOverflowStyle: "none",
          }}
        >
          {renderTags(hero.tags)}
        </HStack>
        <br />
        <Box maxW="1200px" lineHeight={"1.75"}>
          {AtomMachine({ atoms: hero.introduction })}
        </Box>
        <HStack w="100%" marginTop="2rem !important">
          <LinkBox>
            <Button>
              <LinkOverlay href="#contact">Get in Touch</LinkOverlay>
            </Button>
          </LinkBox>
        </HStack>
      </VStack>
    </Container>
  );
};
export default IndexView;

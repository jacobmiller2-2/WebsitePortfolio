/** Interfaces/Types */
import { IHero } from "interfaces/Prismic";
/** Components */
import {
  VStack,
  Heading,
  Tag,
  HStack,
  LinkBox,
  LinkOverlay,
  Box,
  Button,
  Text,
  ScaleFade,
} from "@chakra-ui/react";
import AtomMachine from "components/AtomMachine";
import ViewLayout from "views/ViewLayout";
import { Cyclic } from "components";

interface IndexViewProps {
  hero: IHero;
  [rest: string]: any;
}

const IndexView = ({ hero, ...rest }: IndexViewProps) => {
  return (
    <ViewLayout>
      <VStack spacing={2} align="flex-start" maxW="100%">
        <Heading as="h6" size="sm">
          {hero.prelude}
        </Heading>
        <Heading as="h1" size="4xl">
          {hero.name}.
        </Heading>
        <Box>
          <Cyclic
            items={hero.tags.map((v, i) => (show: boolean) => (
              <ScaleFade
                in={show}
                initialScale={0.9}
                style={{ display: show ? "block" : "none" }}
                key={`item-${i}`}
              >
                <Text color="primary.default">{v.tag}</Text>
              </ScaleFade>
            ))}
            start={<Text>I am a&nbsp;</Text>}
            containerProps={{ display: "flex" }}
          />
        </Box>
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
    </ViewLayout>
  );
};
export default IndexView;

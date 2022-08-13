import { Box, ChakraProvider, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { Footer, Topbar } from "views";
import theme from "lib/theme";
import { ISocial } from "lib/interfaces/Prismic";

interface IMainProps {
  children: React.ReactNode | React.ReactNode[];
  socials: ISocial[];
  head?: JSX.Element;
}

const Main = ({ head, socials, children }: IMainProps) => {
  return (
    <>
      <main>
        <ChakraProvider theme={theme}>
          <Head>{head}</Head>
          <Box bg="paper.default" maxW="100vw" minH="100vh">
            <VStack>
              <Topbar />
              {children}
            </VStack>
          </Box>

          <Footer socials={socials ?? []} />
        </ChakraProvider>
      </main>
    </>
  );
};

export default Main;

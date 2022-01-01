import { useEffect } from "react";
import "styles/globals.css";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import * as gtag from "lib/gtag";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(theme);
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;

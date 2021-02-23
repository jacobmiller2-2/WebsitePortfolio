import { useEffect } from "react";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { AppProps, NextWebVitalsMetric } from "next/app";
import * as gtag from "../lib/gtag";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default App;

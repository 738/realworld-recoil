import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AppLayout } from "~/components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Conduit</title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

export default MyApp;

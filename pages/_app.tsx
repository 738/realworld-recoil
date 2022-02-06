import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { AppLayout } from "~/components/layout";
import { Header, Footer } from "~/components/base";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Conduit</title>
      </Head>
      <AppLayout>
        <>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </>
      </AppLayout>
    </>
  );
}

export default MyApp;

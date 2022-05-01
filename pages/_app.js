import Head from "next/head";
import "nprogress/nprogress.css";
import "../public/static/css/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

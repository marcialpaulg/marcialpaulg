import React, { useEffect } from "react";
import Head from "next/head";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  return (
    <>
      <Head>
        <title>Marcial Paul Gargoles</title>

        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Marcial is a full stack engineer, designer, and founder from Davao City, Philippines."
        />
        <meta name="keywords" content="" />
        <meta name="author" content="Evan Sims, Marcial Paul Gargoles" />
        <link rel="canonical" href="https://marcialpaulg.com" />
        <meta name="copyright" content="2021" />
        <meta name="url" content="https://marcialpaulg.com" />

        <meta http-equiv="imagetoolbar" content="no" />
        <meta http-equiv="x-dns-prefetch-control" content="off" />

        <link rel="icon" href="/favicon.ico" />

        <body class="bg-gray-900 text-gray-400 font-sans font-base font-normal leading-relaxed" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

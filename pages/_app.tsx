/* eslint-disable @next/next/no-page-custom-font */
import Layout from "../components/Layout";
import "../styles/globals.scss";
import youtubeImg from "../public/youtube.png";
import Image from "next/image";
import Head from "next/head";
import React from "react";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        {/* подключаем шрифты */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Image
        src={youtubeImg}
        alt="youtube"
        width={500}
        height={350}
        placeholder="blur"
      />
    </Layout>
  );
};

export default App;

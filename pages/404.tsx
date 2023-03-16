import React, { useEffect } from "react";
import Heading from "../components/Heading";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../styles/404.module.scss";

const Error = () => {
  //получаем текущий путь
  const router = useRouter();

  //перенаправляем на главную страницу через 3 секунды
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className={styles.wraper}>
      <Head>
        <title>Error</title>
      </Head>
      <div/>
      <Heading tag="h1" text="404" />
      <Heading tag="h2" text="Page not found" />
    </div>
  );
};

export default Error;

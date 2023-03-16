import Heading from "../components/Heading";
import Socials from "../components/Socials";
import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.scss";

//получаем данные на стороне сервера
export const getStaticProps = async () => {
  try {
    //получаем данные
    const response = await fetch(`${process.env.API_HOST}/socials/`);
    //преобразуем в json
    const data = await response.json();

    //если данных нет, то возвращаем notFound: true
    if (!data) {
      //специальный объект для 404 страницы
      return {
        notFound: true,
      };
    }
    //если данные есть, то возвращаем props
    return {
      props: {
        socials: data,
      },
    };
  } catch {
    return {
      props: {
        socials: null,
      },
    };
  }
};

const Home = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Next.js Application" tag={undefined} />
      <Socials socials={socials} />
    </div>
  );
};

export default Home;

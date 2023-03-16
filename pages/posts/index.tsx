import React from "react";
import Heading from "@/components/Heading";
import Head from "next/head";
import Link from "next/link";

//получаем данные на стороне сервера
export const getStaticProps = async () => {
  //получаем данные
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
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
      posts: data,
    },
  };
};

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts list:" tag={undefined} />
      <ul>
        {/* // если posts есть, то выводим список постов */}
        {posts &&
          posts.map(({ id, title }) => (
            <li key={id}>
              {/* // Динамический роутинг, передаем id в качестве параметра в путь /posts/[id] */}
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;

import React from "react";
import Head from "next/head";
import PostInfo from "@/components/PostInfo";

// getStaticPaths - это функция, которая генерирует пути для динамических роутов
export const getStaticPaths = async () => {
  //получаем данные
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  // преобразуем в json
  const data = await response.json();

  //получаем массив с id постов
  const paths = data.map(({ id }) => ({
    //передаем id в качестве параметра в путь /posts/[id]
    params: { id: id.toString() },
  }));

  //возвращаем объект с параметрами
  return {
    // paths - массив с путями, которые будут сгенерированы на этапе сборки  приложения
    paths,
    // fallback: false - если не существует страницы с id, то будет 404 ошибка
    fallback: false,
  };
};

// getStaticProps - это функция, которая получает данные на стороне сервера и передает их в props компонента Post (пропсы)
export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  // возвращаем объект с props
  return {
    props: { post: data },
  };
};

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>Post page</title>
      </Head>
      <PostInfo post={post} />
    </>
  );
};

export default Post;

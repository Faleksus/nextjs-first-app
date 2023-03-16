import React, { FC } from "react";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import { GetServerSideProps } from "next";
import { contactType } from "../../types";

type contactTypeProps = {
  contact: contactType;
};

//получаем данные на стороне сервера
//“getServerSideProps” - это функция, которая запускается на сервере Next.js перед тем, как отрендерить страницу.
export const getServerSideProps: GetServerSideProps = async (context) => {
  //вытаскиваем id из параметров
  const { id } = context.params;
  //получаем данные по id конкретного контакта
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
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
      contact: data,
    },
  };
};

const Contact: FC<contactTypeProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact page</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;

import React, { FC, useEffect, useState } from "react";
import Heading from "@/components/Heading";
import Head from "next/head";
import Link from "next/link";
import { contactType } from "@/types";
import { GetStaticProps } from "next";

type contactsTypeProps = {
  contacts: Array<contactType>;
};

//получаем данные на стороне сервера
export const getStaticProps:GetStaticProps = async () => {
  //получаем данные
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
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
      contacts: data,
    },
  };
};

const Contacts: FC<contactsTypeProps> = ({ contacts }) => {
  //получаем данные на стороне клиента
  // const [contacts, setContacts] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const data = await response.json();
  //     setContacts(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" tag={undefined} />
      {/* если contacts есть, то выводим список контактов */}
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => (
            <li key={id}>
              {/* Динамический роутинг, передаем id в качестве параметра в путь /contacts/[id]  */}
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;

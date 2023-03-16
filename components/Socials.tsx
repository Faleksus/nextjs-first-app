import { socialsType } from "@/types";
import Head from "next/head";
import React, { FC, ReactNode } from "react";
import styles from "../styles/Socials.module.scss";

type socialsProps = {
  socials: Array<socialsType>;
};

const Socials: FC<socialsProps> = ({ socials }) => {
  //если нет данных, то ничего не возвращаем
  if (!socials) {
    return null;
  }

  return (
    <>
      <Head>
        {/* //подключаем шрифт font-awesome для логотипов соцсетей */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css"
        />
      </Head>
      <ul className={styles.socials}>
        {socials &&
          socials.map(({ id, icon, path }) => (
            <li key={id}>
              <a href={path} target="_blank" rel="noopener noreferrer">
                <i className={`fab fa-${icon}`} aria-hidden="true" />
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Socials;

import React, { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";
import Image from "next/image";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar:FC = () => {
    //получаем текущий путь
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/logo.png" width={60} height={60} alt="logo" />
      </div>
      <div className={styles.links}>
        {/* перебираем массив navigation и выводим ссылки */}
        {navigation.map(({ id, title, path }) => (
          <Link legacyBehavior key={id} href={path}>
            {/* если текущий путь совпадает с путем из массива, то добавляем класс active */}
            <a className={pathname === path ? styles.active : null}>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.empty}></div>
      <ul className={styles.nav}>
        <li>
          <a href=''>About</a>
        </li>
        <li>
          <a href=''>Resume</a>
        </li>
        <li>
          <a href=''>Blog</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;

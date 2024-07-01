import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../header/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <h1>&lt;HtmlStudy/&gt;</h1>
        </NavLink>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName={styles.active}>
              HtmlTeacher 소개
            </NavLink>
          </li>
          <li>
            <NavLink to="/paragraph/paragraph" activeClassName={styles.active}>
              Paragraph
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

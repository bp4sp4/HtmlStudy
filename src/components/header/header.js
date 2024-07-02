import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import Footer from "../footer/footer";

const Header = () => {
  return (
    <>
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
                HtmlStudy
              </NavLink>
            </li>
            <li>
              <NavLink to="/HTML5/basic" activeClassName={styles.active}>
                기본문서구조
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/paragraph/paragraph"
                activeClassName={styles.active}
              >
                Paragraph - P태그
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <button onClick={toggleDarkMode} className={styles.toggleButton}>
          {isDarkMode ? "라이트 모드" : "다크 모드"}
        </button>
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
              <NavLink
                to="/devtools/vscode"
                exact
                activeClassName={styles.active}
              >
                Visual Studio Code
              </NavLink>
            </li>
            <li>
              <NavLink to="/HTML5/basic" activeClassName={styles.active}>
                기본문서구조
              </NavLink>
            </li>

            <li className={styles.dropdown}>
              <a
                href="#!"
                onClick={toggleDropdown}
                className={`${styles.dropdownLink} ${
                  isDropdownOpen ? styles.active : ""
                }`}
              >
                <span className={styles.arrow}>
                  {isDropdownOpen ? "▲" : "▼"}
                </span>
                텍스트 서식 꾸미기{" "}
              </a>
              <ul
                className={`${styles.dropdownMenu} ${
                  isDropdownOpen ? styles.show : ""
                }`}
              >
                <li>
                  <NavLink to="/text/paragraph" activeClassName={styles.active}>
                    P태그
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/paragraph/sub2" activeClassName={styles.active}>
                    SubMenu 2
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/paragraph/sub3" activeClassName={styles.active}>
                    SubMenu 3
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/HTML5/basic" activeClassName={styles.active}>
                기본문서구조
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <a
          href="https://yourblog.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>{" "}
        <span className={styles.line}>|</span>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} SangHunPark. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

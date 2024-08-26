import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <a
          href="https://frontdevpark.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Blog
        </a>
        <span className={styles.line}>|</span>
        <a
          href="https://github.com/bp4sp4/HtmlStudy"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} HtmlStudy. All rights reserved.
        <br></br> 모든 사람을 위한 Html/Css Study 사이트입니다. 완전한 정확성을
        보증할 수는 없습니다.<br></br>버그, 오타, 문법오류, 문의사항은 메일로
        보내주시면 감사합니다. <br></br>이메일 : bp4sp456@gmail.com 메일
        보내주시면 감사하겠습니다.
      </p>
    </footer>
  );
};

export default Footer;

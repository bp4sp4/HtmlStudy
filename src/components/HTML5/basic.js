import React, { useState, useEffect } from "react";
import styles from "./basic.module.css";
import Header from "../header/header";
import "prismjs/themes/prism.css";
import Prism from "prismjs";

const Basic = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const exampleCode = `<!DOCTYPE html>  <!-- 현재 문서가 HTML5 언어로 작성된 웹 문서라는 뜻입니다. -->
<html lang="ko"> <!-- 웹 문서의 시작과 끝을 나타내느 태그입니다. -->
<head> <!-- 웹 브라우저가 웹 문서를 해석하기 위해 필요한 정보들을 입력하는 부분입니다. -->
    <meta charset="UTF-8"> <!-- 문자 인코딩, 문서 키워드, 문서 요약 정보 표시 -->
    <title>Document</title>
</head>
<body> <!-- 실제로 웹 브라우저 화면에 표시되는 내용입니다. -->
</body>
</html>

<!-- 주석내용 --> 코딩화면에는 보이지만 브라우저에 출력되지 않는 부분을 처리합니다.
`;

  const jobcode = `<meta name="Keywords" content = "검색엔진이 우선 순위로 체크하는 검색어">
<meta name="Author" content = "웹사이트를 제작한 제작자 또는 제작사">
<meta name="description" content = "웹사이트에 대한 짧은 설명 입력">`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exampleCode).then(
      () => setCopySuccess("복사 완료!"),
      () => setCopySuccess("복사 실패.")
    );
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main__wrap}>
        <h1 className={styles.title}>기본문서구조</h1>
        <section className={styles.section} id="intro">
          <div className={styles.descwrap}>
            <h2 className={styles.descwrap__subtitle}>
              HTML 기본 문서 구조 만들기
            </h2>
            <p className={styles.descwrap__subtitle__desc}>
              하이퍼텍스트란 하이퍼링크(Hyperlink)를 담고 있는 문서를 뜻하며,
              HTML은 하이퍼텍스트 마크업 언어 (Hyper Text Markup Language)로
              구성된 문서 형식입니다.
            </p>
          </div>
        </section>
        <section className={styles.section} id="example">
          <h2 className={styles.ex__name}>HTML 기본 코드 예제</h2>
          <div className={styles.codeContainer}>
            <div className={styles.windowBar}>
              <span className={`${styles.circle} ${styles.red}`}></span>
              <span className={`${styles.circle} ${styles.yellow}`}></span>
              <span className={`${styles.circle} ${styles.green}`}></span>
            </div>
            <pre>
              <code className="language-markup">{exampleCode}</code>
            </pre>
            <button onClick={copyToClipboard} className={styles.copyButton}>
              코드 복사
            </button>
            {copySuccess && (
              <span className={styles.copySuccess}>{copySuccess}</span>
            )}
          </div>
          <div className={styles.render__wrap}>
            <p className={styles.render__name}>
              <span className={styles.render__name__sub}>알아두기만해!</span>
            </p>
            <div className={styles.render__code}>
              <pre>
                <code className="language-markup">{jobcode}</code>
              </pre>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Basic;

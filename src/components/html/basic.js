import React, { useState, useEffect } from "react";
import "prismjs/themes/prism.css";
import Prism from "prismjs";
import styles from "./text.module.css";
import Header from "../header/header";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const Basic = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);

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

  const prevPage = { path: "/devtools/vscode" };
  const nextPage = { path: "/html/paragraph" };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exampleCode).then(
      () => setCopySuccess("복사 완료!"),
      () => setCopySuccess("복사 실패.")
    );
  };

  useEffect(() => {
    if (!loading) {
      Prism.highlightAll();
    }
  }, [loading]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Header />
        <main className={styles.main__wrap}>
          <div className={styles.navigationButtons}>
            {prevPage && (
              <NavLink to={prevPage.path} className={styles.navigationLink}>
                ⬅ 이전글
              </NavLink>
            )}
            {nextPage && (
              <NavLink to={nextPage.path} className={styles.navigationLink}>
                ⮕ 다음글
              </NavLink>
            )}
          </div>
          {loading ? (
            <Skeleton
              width="25%"
              height="2rem"
              className={`${styles.skeleton} mb`}
              animation="wave"
            />
          ) : (
            <h1 className={styles.title}>기본문서구조</h1>
          )}
          <section className={styles.section} id="intro">
            {loading ? (
              <>
                <Skeleton
                  width="30%"
                  height="2rem"
                  className={styles.skeleton}
                  animation="wave"
                />
                <Skeleton
                  width="100%"
                  height="1.5rem"
                  className={styles.skeleton}
                  animation="wave"
                />
                <Skeleton
                  width="80%"
                  height="1.5rem"
                  className={styles.skeleton}
                  animation="wave"
                />
              </>
            ) : (
              <div className={styles.descwrap}>
                <h2 className={styles.descwrap__subtitle}>
                  HTML 기본 문서 구조 만들기
                </h2>
                <p className={styles.descwrap__subtitle__desc}>
                  하이퍼텍스트란 하이퍼링크(Hyperlink)를 담고 있는 문서를
                  뜻하며, HTML은 하이퍼텍스트 마크업 언어 (Hyper Text Markup
                  Language)로 구성된 문서 형식입니다.
                </p>
              </div>
            )}
          </section>
          <section className={styles.section} id="example">
            <h2 className={styles.ex__name}>
              {loading ? (
                <Skeleton
                  width="20%"
                  height="2rem"
                  className={styles.skeleton}
                  animation="wave"
                />
              ) : (
                "HTML 기본 코드 예제"
              )}
            </h2>
            <div className={styles.codeContainer}>
              <div className={styles.windowBar}>
                <span className={`${styles.circle} ${styles.red}`}></span>
                <span className={`${styles.circle} ${styles.yellow}`}></span>
                <span className={`${styles.circle} ${styles.green}`}></span>
              </div>
              {loading ? (
                <Skeleton
                  width="100%"
                  height="10rem"
                  className={styles.skeleton}
                  animation="wave"
                />
              ) : (
                <>
                  <pre>
                    <code className="language-markup">{exampleCode}</code>
                  </pre>
                  <button
                    onClick={copyToClipboard}
                    className={styles.copyButton}
                  >
                    코드 복사
                  </button>
                  {copySuccess && (
                    <span className={styles.copySuccess}>{copySuccess}</span>
                  )}
                </>
              )}
            </div>
            <div className={styles.render__wrap}>
              <p className={styles.render__name}>
                {loading ? (
                  <Skeleton
                    width="20%"
                    height="2rem"
                    className={styles.skeleton}
                    animation="wave"
                  />
                ) : (
                  <span className={styles.render__name__sub}>
                    알아두기만해!
                  </span>
                )}
              </p>
              <div className={styles.render__code}>
                {loading ? (
                  <Skeleton
                    width="100%"
                    height="5rem"
                    className={styles.skeleton}
                    animation="wave"
                  />
                ) : (
                  <pre>
                    <code className="language-markup">{jobcode}</code>
                  </pre>
                )}
              </div>
            </div>
          </section>
          <div className={styles.navigationButtons}>
            {prevPage && (
              <NavLink to={prevPage.path} className={styles.navigationLink}>
                ⬅ 이전글
              </NavLink>
            )}
            {nextPage && (
              <NavLink to={nextPage.path} className={styles.navigationLink}>
                ⮕ 다음글
              </NavLink>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Basic;

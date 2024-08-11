import React, { useState, useEffect } from "react";
import styles from "./css.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-css.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const CssIntro = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);

  const cssExampleCode = `<!-- CSS 기본 문법 (Syntax) -->
<style>
  body { /* 선택자(selector) */
    color : crimson;  /* color : 속성(property), crimson : 값(vaule) */
 }  
</style>
<!-- CSS 링크방법 (외부 스타일 / 내부 스타일) -->    
<!DOCTYPE html>
<html lang="ko">
<head> 
    <meta charset="UTF-8">
    <title>CSS 링크하기</title>
    <link rel="stylesheet" href="style.css"> <!-- 외부 스타일 -->
    <style type="text/css"> <!-- 내부 스타일 -->
        body {
            color : navy;
            font-size : 15px;
        }
</head>

<body> 
</body>
</html>
`;

  const jobcode = `color : blue;
/* 컬러를 직접 지정해도 좋지만 보통으로는 코드로 작성하는게 일반적입니다. */
color : #fff, #fafafa, #d2d2d2;`;

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(
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

  const prevPage = { path: "/html/semantictag" };
  const nextPage = { path: "/css/selector" };

  return (
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
            height="3rem"
            className={`${styles.skeleton} mb`}
            animation="wave"
          />
        ) : (
          <h1 className={styles.title}>CSS #기본문법</h1>
        )}
        <section className={styles.section} id="intro">
          {loading ? (
            <>
              <Skeleton
                width="30%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />
              <Skeleton
                width="75%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />
            </>
          ) : (
            <div className={styles.descwrap}>
              <h2 className={styles.descwrap__subtitle}>
                CSS 기본 문법 / CSS 링크 방법
              </h2>
              <p className={styles.descwrap__subtitle__desc}>
                아래 코드는 CSS 예제 코드입니다. 각 속성에 대한 설명은 주석으로
                표시되어 있습니다.
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
              "CSS 예제"
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
                height="33rem"
                className={styles.skeleton}
                animation="wave"
              />
            ) : (
              <>
                <pre>
                  <code className="language-markup">{cssExampleCode}</code>
                </pre>
                <button
                  onClick={() => copyToClipboard(cssExampleCode)}
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
                  알아두면 좋은 TIP!
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
                  <code className="language-css">{jobcode}</code>
                </pre>
              )}
            </div>
            <section className={styles.section} id="promotion">
              <div className={styles.descwrap}>
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
                      추천 컬러 사이트 링크
                    </span>
                  )}
                </p>
                <ul className={styles.linklist}>
                  {loading ? (
                    <>
                      <Skeleton
                        width="75%"
                        height="1.5rem"
                        className={styles.skeleton}
                        animation="wave"
                      />
                      <Skeleton
                        width="75%"
                        height="1.5rem"
                        className={styles.skeleton}
                        animation="wave"
                      />
                      <Skeleton
                        width="75%"
                        height="1.5rem"
                        className={styles.skeleton}
                        animation="wave"
                      />
                    </>
                  ) : (
                    <>
                      <li>
                        <a
                          href="https://colorhunt.co/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          ColorHunt
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.webdesignrankings.com/resources/lolcolors/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LOLCOLORS
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://coolors.co/cae7b9-f3de8a-eb9486-7e7f9a-97a7b3"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Coolors
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </section>
          </div>
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
        </section>
      </main>
    </div>
  );
};

export default CssIntro;

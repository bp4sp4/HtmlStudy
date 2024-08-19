import React, { useState, useEffect } from "react";
import styles from "./text.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-markup.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const Hngroup = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const exampleCode = `<h1>제목 꾸미기</h1>
<h2>제목 꾸미기</h2>
<h3>제목 꾸미기</h3>
<h4>제목 꾸미기</h4>
<h5>제목 꾸미기</h5>
<h6>제목 꾸미기</h6>
<b>그냥 굵은 글씨</b>
<strong>그냥 굵은 글씨</strong>`;

  const jobcode = `<b>굵은글씨</b>
<strong>그냥 굵은 글씨</strong>
<!-- css 활용 많이 안쓰이지만 가끔 사용한다.-->
font-weight : bold 혹은 600,700;`;

  const prevPage = { path: "/html/paragraph" };
  const nextPage = { path: "/html/Oftentag" };

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
          <h1 className={styles.title}>
            {" "}
            <span role="img" aria-label="fire">
              🔥
            </span>
            Heading(hn태그)
          </h1>
        )}
        <section className={styles.section} id="intro">
          {loading ? (
            <>
              <Skeleton
                width="10%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />
              <Skeleton
                width="60%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />
            </>
          ) : (
            <div className={styles.descwrap}>
              <h2 className={styles.descwrap__subtitle}>제목 표시하기</h2>
              <p className={styles.descwrap__subtitle__desc}>
                heading을 뜻하며 h태그로 표시, 제목의 레벨에 따라서
                &lt;h1&gt;~&lt;h6&gt; 까지 있습니다.
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
              "Hngroup 태그 예제"
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
                height="17rem"
                className={styles.skeleton}
                animation="wave"
              />
            ) : (
              <>
                <pre>
                  <code className="language-markup">{exampleCode}</code>
                </pre>
                <button onClick={copyToClipboard} className={styles.copyButton}>
                  코드 복사
                </button>
                {copySuccess && (
                  <span className={styles.copySuccess}>{copySuccess}</span>
                )}
              </>
            )}
          </div>
          <div className={styles.render__wrap}>
            <h2 className={styles.render__name}>
              {loading ? (
                <Skeleton
                  width="20%"
                  height="2rem"
                  className={styles.skeleton}
                  animation="wave"
                />
              ) : (
                "Hngroup 태그 실행 예제 화면"
              )}
            </h2>
            <div className={styles.render__code}>
              {loading ? (
                <Skeleton
                  width="100%"
                  height="10rem"
                  className={styles.skeleton}
                  animation="wave"
                />
              ) : (
                <>
                  {" "}
                  <h1>제목 꾸미기</h1>
                  <h2>제목 꾸미기</h2>
                  <h3>제목 꾸미기</h3>
                  <h4>제목 꾸미기</h4>
                  <h5>제목 꾸미기</h5>
                  <h6>제목 꾸미기</h6>
                  <b>그냥 굵은 글씨</b>
                  <br></br>
                  <strong>그냥 굵은 글씨</strong>
                </>
              )}
            </div>
          </div>
          <div className={styles.render__name}>
            {loading ? (
              <Skeleton
                width="20%"
                height="2rem"
                className={styles.skeleton}
                animation="wave"
              />
            ) : (
              <span className={styles.render__name__sub}>알아두기만해!</span>
            )}
          </div>
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
  );
};

export default Hngroup;

import React, { useState, useEffect } from "react";
import styles from "./css.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-css.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const Fixed = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);

  const cssExampleCode = `<style>
.btn-top {
    position: fixed;
    width: 20px;
    height: 20px;
    right: 20px;
    bottom: 20px;
    background-color: aqua;
}
</style>

<a href="#" class="btn-top"></a>

`;

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

  const prevPage = { path: "/css/position02" };
  const nextPage = { path: "/css/absolute" };

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
            <span role="img" aria-label="fire">
              🔥
            </span>
            CSS <span className={styles.highlight}># 포지셔닝</span>
          </h1>
        )}
        <section className={styles.section} id="intro">
          {loading ? (
            <>
              <Skeleton
                width="45%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />
              <Skeleton
                width="45%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />
            </>
          ) : (
            <div className={styles.descwrap}>
              <h2 className={styles.descwrap__subtitle}>
                CSS 포지셔닝 - 엘리먼트 자유롭게 배치하기 (속성 : fixed)
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
              "CSS 예제입니다."
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
                height="30rem"
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
            <h2 className={styles.render__name}>
              {loading ? (
                <Skeleton
                  width="20%"
                  height="2rem"
                  className={styles.skeleton}
                  animation="wave"
                />
              ) : (
                "CSS 실행 예제 화면"
              )}
            </h2>
            <div className={styles.render__code}>
              {loading ? (
                <Skeleton
                  width="100%"
                  height="20rem"
                  className={styles.skeleton}
                  animation="wave"
                />
              ) : (
                <>
                  {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                  <a href="/css/fixed" className={styles.btn__top}></a>
                  이번 예제는 오른쪽 아래를 보시면 됩니다.
                </>
              )}
            </div>
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

export default Fixed;

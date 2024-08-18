import React, { useState, useEffect } from "react";
import styles from "./css.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-css.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const Background = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);

  const cssExampleCode = `<style>
.contents{
  width:600px;
  padding: 20px;
  text-align : center;
  background-color : #fff;
}

.contents__lorem {
 background-color : #ddd;
}
</style>

<div class="contents">
  <h1>Background Color</h1>
  <p class="contents__lorem">Background color is used to change the background color of an element.</p>
</div>

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

  const prevPage = { path: "/css/ullist01" };
  const nextPage = { path: "/css/favicon" };

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
          <h1 className={styles.title}>CSS #배경 제어하기</h1>
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
                CSS 배경 색상 및 이미지 제어하기 (background-color : 배경 색상
                조정)
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
                  height="16rem"
                  className={styles.skeleton}
                  animation="wave"
                />
              ) : (
                <div className={styles.contents}>
                  <h1>Background Color</h1>
                  <p class={styles.contents__lorem}>
                    Background color is used to change the background color of
                    an element.
                  </p>
                </div>
              )}
            </div>
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
                        href="https://apost.dev/1025/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CSS 가상 요소 설명 블로그1
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://velog.io/@sebinn/%EA%B0%80%EC%83%81-%EC%9A%94%EC%86%8C-%EC%84%A0%ED%83%9D%EC%9E%90-before-after"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        CSS 가상 요소 설명 블로그2
                      </a>
                    </li>
                  </>
                )}
              </ul>
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
        </section>
      </main>
    </div>
  );
};

export default Background;

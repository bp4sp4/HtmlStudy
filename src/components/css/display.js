import React, { useState, useEffect } from "react";
import styles from "./css.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-css.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const Display = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);

  const cssExampleCode = `<style>
.imgcontents img{
  display : block;
}
.imgcontents2 img{
  display : lnline;
}

.imgcontents3 img{
  display : none;
}
</style>

<div class="imgcontents">
  <img src="https://via.placeholder.com/100">
  <img src="https://via.placeholder.com/200">
  <img src="https://via.placeholder.com/200">
</div>

<div class="imgcontents2">
  <img src="https://via.placeholder.com/100">
  <img src="https://via.placeholder.com/200">
  <img src="https://via.placeholder.com/200">
</div>

<div class="imgcontents3">
  <img src="https://via.placeholder.com/100">
  <img src="https://via.placeholder.com/200">
  <img src="https://via.placeholder.com/200">
</div>`;
  const jobcode = `inline, block, inline-block, none
레이아웃 요소를 배치 및 특성을 변경하는정말 중요한 속성과 값
display 속성으로 블록 요소와 인라인 요소의 속성을 변경할 수 있고, 요소를 보이거나 보이지 않게 할 수 있습니다.
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
  const nextPage = { path: "/css/element" };

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
            CSS <span className={styles.highlight}>#display 속성</span>으로 속성
            변경하기
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
                레이아웃 스타일(display 속성 : inline, block, inline-block,
                none)
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
                  height="5 rem"
                  className={styles.skeleton}
                  animation="wave"
                />
              ) : (
                <>
                  <h1>inline block</h1>
                  <div className={styles.imgcontents}>
                    <img src="https://via.placeholder.com/100" alt="" />
                    <img src="https://via.placeholder.com/100" alt="" />
                    <img src="https://via.placeholder.com/100" alt="" />
                  </div>

                  <h1>inline</h1>
                  <div className={styles.imgcontents2}>
                    <img src="https://via.placeholder.com/100" alt="" />
                    <img src="https://via.placeholder.com/100" alt="" />
                    <img src="https://via.placeholder.com/100" alt="" />
                  </div>
                  <h1>none</h1>
                  <div className={styles.imgcontents3}>
                    <img src="https://via.placeholder.com/100" alt="" />
                    <img src="https://via.placeholder.com/100" alt="" />
                    <img src="https://via.placeholder.com/100" alt="" />
                  </div>
                </>
              )}
            </div>
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

export default Display;

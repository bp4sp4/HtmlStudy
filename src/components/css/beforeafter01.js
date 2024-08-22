import React, { useState, useEffect } from "react";
import styles from "./css.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-css.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const BeforeAfter01 = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);

  const cssExampleCode = `<style>
.h1 {
    font-weight: normal;
    position: relative;
}

.h1::before {
    content: '✌️';
}

.h1::after {
    content: '#01'; /* 반드시 있어야하는 속성 */
    background-color: crimson;
    color: #fff;
    font-size: 18px;
    padding: 0 5px;
    border-radius: 3px;
    margin-left: 10px;
    position: absolute;
    top: 10px;
}
</style>

<h1> HtmlStudy 온라인 강의</h1>
`;
  const jobcode = `/* 많이 사용되는 클래스 입니다. 꼭 알고 넘어가셔야 합니다! */
HTML 요소 앞이나 뒤에 생성되는 내용을 넣어주는 가상 클래스, HTML 요소는 부모요소, :befere :after는 자식요소
가상클래스 :before와 :after를 사용할 떄 content ''; 따옴표 안에 텍스트를 사용하지 않는 경우라도 
반드시 content:""; 있어야 다른것들이 표시됩니다.
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

  const prevPage = { path: "/css/checked" };
  const nextPage = { path: "/css/beforeafter02" };

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
            width="20%"
            height="3rem"
            className={`${styles.skeleton} mb`}
            animation="wave"
          />
        ) : (
          <h1 className={styles.title}>
            <span role="img" aria-label="fire">
              🔥
            </span>
            CSS <span className={styles.highlight}>#가상 클래스 </span>
          </h1>
        )}
        <section className={styles.section} id="intro">
          {loading ? (
            <>
              <Skeleton
                width="35%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />
              <Skeleton
                width="55%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />
            </>
          ) : (
            <div className={styles.descwrap}>
              <h2 className={styles.descwrap__subtitle}>
                :before :after 상급자를 위한 가상 클래스(1)
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
                height="50rem"
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
                  height="10rem"
                  className={styles.skeleton}
                  animation="wave"
                />
              ) : (
                <>
                  <h1 className={styles.bfex01}> HtmlStudy 온라인 강의</h1>
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

export default BeforeAfter01;

import React, { useState, useEffect } from "react";
import styles from "./text.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-markup.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const Paragraph = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);

  const exampleCode = `<p>This is a paragraph.<br>이건 P태그에요!</p>
<hr> <!-- 수평선을 넣는 hr 태그입니다. -->
<p>이거또한 P태그에요</p>`;
  const jobcode = `<span>This is a span</span> 
<!-- p태그와 비슷하다고 생각할 수 있지만 스타일 적용이나 요소를 묶을때 사용함 -->`;

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

  const prevPage = { path: "/HTML5/basic" };
  const nextPage = { path: "/html/hngroup" };

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
          <h1 className={styles.title}>Paragraph(P태그)</h1>
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
                width="100%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />
              <Skeleton
                width="40%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />
            </>
          ) : (
            <div className={styles.descwrap}>
              <h2 className={styles.descwrap__subtitle}>
                P 태그 요소는 하나의 문단을 나타냅니다.
              </h2>
              <p className={styles.descwrap__subtitle__desc}>
                시각적인 매체에서, 문단은 보통 인접 블록과의 여백과 첫 줄의
                들여쓰기로 구분하지만, HTML에서 문단은 이미지나 입력 폼 등 서로
                관련있는 콘텐츠 무엇이나 될 수 있습니다.
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
              "P 태그 예제"
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
                height="8rem"
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
                "P 태그 실행 예제 화면"
              )}
            </h2>
            <div className={styles.render__code}>
              {loading ? (
                <Skeleton
                  width="100%"
                  height="5rem"
                  className={styles.skeleton}
                  animation="wave"
                />
              ) : (
                <>
                  {" "}
                  <p>
                    This is a paragraph.<br></br>이건 P태그에요!
                  </p>
                  <hr></hr>
                  <p>이거또한 P태그에요</p>
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

export default Paragraph;

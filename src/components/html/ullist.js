import React, { useState, useEffect } from "react";
import styles from "./text.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-markup.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const UlList = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const exampleCode = `<ul>
    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
</ul>
<ul type="circle">
    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
</ul>
`;

  const prevPage = { path: "/html/ollist" };
  const nextPage = { path: "/html/figure" };

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
            width="35%"
            height="2rem"
            className={`${styles.skeleton} mb`}
            animation="wave"
          />
        ) : (
          <h1 className={styles.title}>Unordered List(ul태그)</h1>
        )}
        <section className={styles.section} id="intro">
          {loading ? (
            <>
              <Skeleton
                width="60%"
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
                width="15%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />
            </>
          ) : (
            <div className={styles.descwrap}>
              <h2 className={styles.descwrap__subtitle}>
                순서가 지정되어 있지 않는 항목의 목록를 나타내는 태그입니다.
              </h2>
              <p className={styles.descwrap__subtitle__desc}>
                &lt;ul&gt; 은 순서를 변경해도 그 의미가 실질적으로 변경되지
                않는다는 의미인 Unordered List(정렬되지 않은 목록)의 약자로
                사용된 것입니다.
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
              "ul 태그 예제"
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
                height="20rem"
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
                "ul 태그 실행 예제 화면"
              )}
            </h2>
            <div className={styles.render__code}>
              {loading ? (
                <Skeleton
                  width="100%"
                  height="12rem"
                  className={styles.skeleton}
                  animation="wave"
                />
              ) : (
                <>
                  {" "}
                  <ul className={styles.ullist}>
                    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
                    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
                    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
                  </ul>
                  <ul type="circle" className={styles.ullist2}>
                    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
                    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
                    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
                  </ul>
                </>
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
  );
};

export default UlList;

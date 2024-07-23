import React, { useState, useEffect } from "react";
import styles from "./text.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-markup.min.js";
import { Skeleton } from "primereact/skeleton";

const Table = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const exampleCode = `<table border="1">
  <thead>
    <tr>
      <th>학교</th>
      <th>창립년도</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>서울대학교</td>
      <td>1946</td>
    </tr>
    <tr>
      <td>고려대학교</td>
      <td>1905</td>
    </tr>
    <tr>
      <td>연세대학교</td>
      <td>1885</td>
    </tr>
  </tbody>
</table>`;
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

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main__wrap}>
        {loading ? (
          <Skeleton
            width="25%"
            height="3rem"
            className={`${styles.skeleton} mb`}
            animation="wave"
          />
        ) : (
          <h1 className={styles.title}>Table(표 만들기)</h1>
        )}
        <section className={styles.section} id="intro">
          {loading ? (
            <>
              <Skeleton
                width="50%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />

              <Skeleton
                width="70%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />
            </>
          ) : (
            <div className={styles.descwrap}>
              <h2 className={styles.descwrap__subtitle}>
                행과 열로 구성된 2차원 테이블을 정의할 때 사용합니다.
              </h2>
              <p className={styles.descwrap__subtitle__desc}>
                테이블은 &lt;table&gt; 요소와 자식 요소인 하나 이상의
                &lt;tr&gt;, &lt;th&gt;, &lt;td&gt; 요소들로 구성됩니다.
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
              "Table 태그 예제"
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
                  <table className={styles.tabletag}>
                    <thead>
                      <tr>
                        <th>학교</th>
                        <th>창립년도</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>서울대학교</td>
                        <td>1946</td>
                      </tr>
                      <tr>
                        <td>고려대학교</td>
                        <td>1905</td>
                      </tr>
                      <tr>
                        <td>연세대학교</td>
                        <td>1885</td>
                      </tr>
                    </tbody>
                  </table>
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
      </main>
    </div>
  );
};

export default Table;

import React, { useState, useEffect } from "react";
import styles from "./text.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-markup.min.js";
import { Skeleton } from "primereact/skeleton";

const Ollist = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const exampleCode = `<ol>
    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
</ol>
<ol type="A">
    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
</ol>
<ol>
    <li type="A">목록 앞에 기호를 넣어 목록 만드는 형식</li>
    <li type="a">목록 앞에 기호를 넣어 목록 만드는 형식</li>
    <li type="ⅰ">목록 앞에 기호를 넣어 목록 만드는 형식</li>
    <li type="ⅲ">목록 앞에 기호를 넣어 목록 만드는 형식</li>
</ol>`;
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
            width="35%"
            height="2rem"
            className={`${styles.skeleton} mb`}
            animation="wave"
          />
        ) : (
          <h1 className={styles.title}>Ordered List(ol태그)</h1>
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
                순서가 지정되어 있는 항목의 목록를 나타내는 태그입니다.
              </h2>
              <p className={styles.descwrap__subtitle__desc}>
                &lt;ol&gt; 은 순서를 변경하면 그 의미가 실질적으로 변경된다는
                의미인 Ordered List(순서가 지정된 목록)의 약자로 사용된
                것입니다.
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
              "ol 태그 예제"
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
                  <ol>
                    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
                    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
                    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
                  </ol>
                  <ol type="A">
                    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
                    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
                    <li>목록 앞에 기호를 넣어 목록 만드는 형식</li>
                  </ol>
                  <ol>
                    <li type="A">목록 앞에 기호를 넣어 목록 만드는 형식</li>
                    <li type="a">목록 앞에 기호를 넣어 목록 만드는 형식</li>
                    <li type="ⅰ">목록 앞에 기호를 넣어 목록 만드는 형식</li>
                    <li type="ⅲ">목록 앞에 기호를 넣어 목록 만드는 형식</li>
                  </ol>
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

export default Ollist;

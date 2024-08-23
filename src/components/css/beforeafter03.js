import React, { useState, useEffect } from "react";
import styles from "./css.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-css.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const BeforeAfter03 = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [downSuccess, setDownSuccess] = useState(""); // New state for download success
  const [loading, setLoading] = useState(true);

  const cssExampleCode = `<style>
.content {
    width: 600px;
    height: 400px;
    background-image: url('/images/flower.jpg') no-repeat;
    background-size: cover;
    position: relative;
}
/* 가상클래스 :before :after 사용 예시 - 배경 이미지에 오버레이 사용하기 */
.content::before {
    content: '';
    background-color: rgba(10, 0, 255, 0.34);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>

<div class="content"></div>
`;

  const jobcode = `/* 많이 사용되지 않는 방법 입니다. */
.content:before를 .cotent:after로 바뀌어도 결과는 동일합니다. before로 꾸미고 after로 다른 디자인을 꾸며도 됩니다.
`;

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code).then(
      () => setCopySuccess("복사 완료!"),
      () => setCopySuccess("복사 실패.")
    );
  };

  const downToClipboard = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "flower.jpg"; // You can change the file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownSuccess("다운 완료!"); // Update state on success
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

  const prevPage = { path: "/css/beforeafter02" };

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
                :before :after 상급자를 위한 가상 클래스(3)
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
                <div className={styles.commonbtn}>
                  <button
                    onClick={() => copyToClipboard(cssExampleCode)}
                    className={styles.copyButton}
                  >
                    코드 복사
                  </button>
                  {copySuccess && (
                    <span className={styles.copySuccess}>{copySuccess}</span>
                  )}
                </div>
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
                  <div className={styles.bf03}></div>
                  <div className={styles.commonbtn}>
                    <div className={styles.downbtn__wrap}>
                      <button
                        onClick={() => downToClipboard("/images/flower.jpg")}
                        className={styles.downbtn}
                      >
                        이미지 다운로드
                      </button>
                      {downSuccess && (
                        <span className={styles.copySuccess}>
                          {downSuccess}
                        </span>
                      )}
                    </div>
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default BeforeAfter03;

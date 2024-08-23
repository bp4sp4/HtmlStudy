import React, { useState, useEffect } from "react";
import styles from "./css.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-css.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const Flex = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);

  const cssExampleCode = `<style>
body{ /* 홈페이지 제작자 또는 퍼블리셔, 프론트앤드 개발자 들이 가장 많이 사용하는 속성 입니다. */
    height: 100vh; /* body의 높이 값이 반드시 필요합니다. */
    display: flex;
    justify-content: center;
    align-items: center;
}

.content{
    width: 100px;
    height: 100px;
    background-color: #26ff00bd;
}
</style>

<div clss="content">
  display: flex 속성
</div>
`;

  const jobcode = `/* display: flex가 자주 사용되고 많은 개발자들이 선호하는 이유 */
이 홈페이지 또한 display : flex 속성이 가장많이 사용되었다는.. 
- 유연한 레이아웃
- 정렬 및 배치의 편리성
- 반응형 디자인의 용이성
- 복잡한 레이아웃도 쉽게 구현 가능 
- 브라우저 호환성
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

  const prevPage = { path: "/css/absolute" };
  const nextPage = { path: "/css/hover" };

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
            CSS <span className={styles.highlight}> #display : flex </span>
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
                수직중앙 수평 중앙의 모든 것
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
              "🔥 CSS 예제"
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
                "🔥 CSS 실행 예제 화면"
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
                  <div className={styles.flex__wrap}>
                    <div className={styles.flexex01}>display :flex 속성</div>
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
                  🔥 알아두면 좋은 TIP!
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
          <section className={styles.section} id="promotion">
            <div className={styles.descwrap}>
              <p className={styles.render__name}>
                {loading ? (
                  <Skeleton
                    width="30%"
                    height="2rem"
                    className={styles.skeleton}
                    animation="wave"
                  />
                ) : (
                  <span className={styles.render__name__sub}>
                    🔥 추천 컬러 사이트 링크(강추!!)
                  </span>
                )}
              </p>
              <ul className={styles.linklist}>
                {loading ? (
                  <>
                    <Skeleton
                      width="20%"
                      height="1.5rem"
                      className={styles.skeleton}
                      animation="wave"
                    />
                  </>
                ) : (
                  <>
                    <li>
                      <a
                        href="https://studiomeal.com/archives/197"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        1분코딩 - display : flex
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

export default Flex;

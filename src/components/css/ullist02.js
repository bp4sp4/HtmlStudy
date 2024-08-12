import React, { useState, useEffect } from "react";
import styles from "./css.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-css.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const Ullist02 = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);

  const cssExampleCode = `<style>
ul.football {
  list-style : none;
  margin : 0; padding: 40px;
  border : 1px solid #ddd; width : 800px;
  overflow : hidden /* 높이값 찾아주기 */
}
ul.football li {
  float : left; /* 가로배치를 위한 속성 */
  text-align : center; /* li 내에서 중앙정렬 */
  width : 20%;
}
ul.football li a {
  text-decoration : none /* 언더라인 없애기 */
  color : #000;
}
ul.football li a:hover {
  color : royalblue; text-decoration : underline;
}
 
</style>

<ul class="football">
  <li><a href="#none">영국 프리미어리그</a></li>
  <li><a href="#none">스페인 프리메라리그</a></li>
  <li><a href="#none">독일 분데스리가</a></li>
  <li><a href="#none">이탈리아 세리에A</a></li>
  <li><a href="#none">프랑스 리그1</a></li>
<ul>
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
          <h1 className={styles.title}>CSS #목록스타일</h1>
        )}
        <section className={styles.section} id="intro">
          {loading ? (
            <>
              <Skeleton
                width="55%"
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
                CSS 텍스트 그림자 효과 (속성 : text-shadow)
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
                height="45rem"
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
                <ul className={styles.football}>
                  <li>
                    <a href="#none">영국 프리미어리그</a>
                  </li>
                  <li>
                    <a href="#none">스페인 프리메라리그</a>
                  </li>
                  <li>
                    <a href="#none">독일 분데스리가</a>
                  </li>
                  <li>
                    <a href="#none">이탈리아 세리에A</a>
                  </li>
                  <li>
                    <a href="#none">프랑스 리그1</a>
                  </li>
                </ul>
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

export default Ullist02;

import React, { useState, useEffect } from "react";
import styles from "./css.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-css.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const Selector2 = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);

  const cssExampleCode = `<h1>CSS 선택자(Selector)란?</h1>
<div>
  <span>CSS에서 HTML 요소를 선택하는것 입니다.</span>
  선택을 통해 특정 요소들의 스타일을 적용할 수 있게 됩니다.
  <p>
    문장들을 한군데에 모으면 <span>스타일 시트(Style Sheet)</span>
    를 이루게 되어, 많은 수의 스타일 규칙들을 관리하기 쉬워집니다.
  </p>
</div>

<!-- css -->
/* 하위 선택자 */
<style>
div span {
  color : red;
}
/* 자식 선택자 */
div > span {
  color : blue;
}
/* 그룹 선택자 */
h1, p span {
  color : red;
}
/* 전체선택자 */
* {
  font-size : 14px; /* 모든 텍스트에 적용 */
}
</style>

`;

  const jobcode = `<!-- CSS 선택자 - 적용 우선순위 -->
1. !important Style
2. lnline Style
3. ID Selector Style
4. Class Selector Style
5. Tag Selector Style 
<!-- 동일한 css 속성이 중복 사용되는 경우 스타일은 왼쪽의 우선 순위에 따라 적용됩니다. --> `;

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

  const prevPage = { path: "/css/selector" };
  const nextPage = { path: "/css/font01" };

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
          <h1 className={styles.title}>CSS #선택자</h1>
        )}
        <section className={styles.section} id="intro">
          {loading ? (
            <>
              <Skeleton
                width="40%"
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
                CSS 선택자 - 하위, 자식, 그룹, 전체 선택자
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
                height="33rem"
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
                  height="2rem"
                  className={styles.skeleton}
                  animation="wave"
                />
              ) : (
                <div className={styles.font2}>
                  <h1>CSS 선택자(Selector)란?</h1>
                  <div>
                    <span>CSS에서 HTML 요소를 선택하는것 입니다.</span>
                    선택을 통해 특정 요소들의 스타일을 적용할 수 있게 됩니다.
                    <p>
                      문장들을 한군ㄷ에 모으면{" "}
                      <span>스타일 시트(Style Sheet)</span>를 이루게 되어, 많은
                      수의 스타일 규칙들을 관리하기 쉬워집니다.
                    </p>
                  </div>
                </div>
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
                  <code className="language-markup">{jobcode}</code>
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

export default Selector2;

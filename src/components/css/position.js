import React, { useState, useEffect } from "react";
import styles from "./css.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-css.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const Position02 = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);

  const cssExampleCode = `<style>
.parents {
    height: 250px;
    position: relative;
}

.parents div {
    width: 200px;
    height: 200px;
    position: absolute;
}

.childs {
    background-color: skyblue;
    z-index: 0;
}

.childs2 {
    background-color: gold;
    z-index: 1;
    top: 10px;
    left: 10px;

}

.childs3 {
    background-color: gray;
    z-index: 2;
    top: 20px;
    left: 20px;
}
</style>

<div class="parents"> 
  <div class="childs"></div>
  <div class="childs2"></div>
  <div class="childs3"></div>
</div>
`;

  const jobcode = `/* 생각보다 많이 사용하는 속성값입니다. 알아두시면 좋은 팁입니다. */
- z-index 속성이 없는 경우 html 순서상 늦게 나온 html 요소에 위로 올라옵니다.
- z-index는 숫자가 높을 수록 위로 올라옴
- z-index는 마이너스(-) 값도 사용할 수 있음
- z-index를 0, 1, 2, 3 이런 식으로 꼭 단계로 넣을 필요 없음( ex, 100또는 1000)
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

  const prevPage = { path: "/css/position01" };
  const nextPage = { path: "/css/fixed" };

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
            CSS <span className={styles.highlight}># 포지셔닝</span>
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
                width="55%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />
            </>
          ) : (
            <div className={styles.descwrap}>
              <h2 className={styles.descwrap__subtitle}>
                겹처진 HTML 요소의 레이어 순서 바꾸기(z-index)
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
              "CSS 예제입니다."
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
                  height="20rem"
                  className={styles.skeleton}
                  animation="wave"
                />
              ) : (
                <>
                  <div className={styles.parents}>
                    <div className={styles.childs}></div>
                    <div className={styles.childs2}></div>
                    <div className={styles.childs3}></div>
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
                  height="15rem"
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

export default Position02;

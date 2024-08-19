import React, { useState, useEffect } from "react";
import styles from "./css.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-css.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const Ullist01 = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);

  const cssExampleCode = `<style>
ul.list {
  padding : 0;
  line-height : 2em;
}
ul.list > li {
  list-style : none;
}
ul.list > li > b {
  background-color : #000;
  color: #fff;
  font-weight : normal;
}
ul. list > li ul {
  list-style : decimal;
}
 
</style>

<ul class="list>
  <li><b>잉글랜드 프리미어 리그 </b>
    <ul>
      <li>우승 : 맨체스터 시티 </li>
      <li>챔피언스 리그 : 맨시티, 맨유, 토트넘, 리버풀 </li>
      <li>유로파리그 : 첼시, 아스날, 번리(예선)</li>
    </ul>
  </li>   
   <li><b>스페인 프리메라리가 </b>
    <ul>
      <li>우승 : 바로셀로나 </li>
      <li>챔피언스 리그 : 바로셀로나, AT마드리드 </li>
      <li>유로파리그 : 비야레알, 베티스, 세비야(예선)</li>
    </ul>
  </li>
</ul>

  `;

  const jobcode = `list-style-type : 목록에서 글 머리 기호 및 숫자 스타일 지정
ul{
    list-style : square ◼️ /* 리스트 스타일의 값을 변경하면 됨 */
    list-style : circle ○
    list-style : disc ●
  }
⭐⭐⭐⭐⭐ 굉장히 많이 쓰이는 스타일 속성이다.
ul {
    list-style : none; /* ul을 네비게이션 제작할 경우 */
  }
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

  const prevPage = { path: "/css/shadow02" };
  const nextPage = { path: "/css/ullist02" };

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
            width="18%"
            height="3rem"
            className={`${styles.skeleton} mb`}
            animation="wave"
          />
        ) : (
          <h1 className={styles.title}>
            {" "}
            <span role="img" aria-label="fire">
              🔥
            </span>
            CSS #목록스타일
          </h1>
        )}
        <section className={styles.section} id="intro">
          {loading ? (
            <>
              <Skeleton
                width="20%"
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
                CSS 목록 스타일(1) - 속성과 값
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
                <ul className={styles.list}>
                  <li>
                    <b>잉글랜드 프리미어 리그 </b>
                    <ul>
                      <li>우승 : 맨체스터 시티 </li>
                      <li>챔피언스 리그 : 맨시티, 맨유, 토트넘, 리버풀 </li>
                      <li>유로파리그 : 첼시, 아스날, 번리(예선)</li>
                    </ul>
                  </li>
                  <li>
                    <b>스페인 프리메라리가 </b>
                    <ul>
                      <li>우승 : 바로셀로나 </li>
                      <li>챔피언스 리그 : 바로셀로나, AT마드리드 </li>
                      <li>유로파리그 : 비야레알, 베티스, 세비야(예선)</li>
                    </ul>
                  </li>
                </ul>
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

export default Ullist01;

import React, { useState, useEffect } from "react";
import styles from "./text.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-markup.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const Semantictag = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);

  const exampleCode = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <!-- 초기 화면 배율(initial-scale) 설정(zoom 레벨 설정) -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>시멘틱 태그</title>
</head>
<body>
    <header>
    <!-- 로고, 네비게이션, 상단 메인 이미지 -->
        <nav></nav>
    </header>
    <main>
        <section>
        <!-- 메인 컨텐츠 내용 -->
            <article></article>
            <aside></aside>
        </section>
    </main>
    <!-- 회사정보, SNS, 카피라이트 -->
    <footer></footer>
</body>
</html>`;
  const jobcode = `가장 상위의 컨테이너 : .container 또는 .wrapper
문서의 주요 내용을 지정 : main
주제별 콘텐츠 영억 : section
헤더 영역 (로고, 메뉴, 로그, 검색 등) : header
제작 정보 및 저작권 정보 표시 : footer
콘텐츠 내용 넣기 : article
문서를 링크하는 탐색 영역 : nav`;

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

  const prevPage = { path: "/html/formoption2" };
  const nextPage = { path: "/css/intro" };

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
            height="3rem"
            className={`${styles.skeleton} mb`}
            animation="wave"
          />
        ) : (
          <h1 className={styles.title}>Semantic(시멘틱 태그)</h1>
        )}
        <section className={styles.section} id="intro">
          {loading ? (
            <>
              <Skeleton
                width="70%"
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
                width="75%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />
            </>
          ) : (
            <div className={styles.descwrap}>
              <h2 className={styles.descwrap__subtitle}>
                시맨틱 태그는 콘텐츠의 형식 뿐만 아니라 콘텐츠의 의미와 구조를
                설명합니다.
              </h2>
              <p className={styles.descwrap__subtitle__desc}>
                시맨틱 태그를 사용하면 접근성과, SEO, 가독성 측면에서 다양한
                이점을 얻을 수 있습니다. 이번 글에서는 시맨틱 태그가 무엇인지,
                어떻게 작용하는 지 살펴보고, 시맨틱 태그 요소의 종류와 이점까지
                알아보겠습니다.
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
              "Semantic 태그 예제"
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
                height="38rem"
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

export default Semantictag;

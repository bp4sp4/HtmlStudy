import React, { useState, useEffect } from "react";
import styles from "./css.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-css.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const Element = () => {
  const [loading, setLoading] = useState(true);

  const jobcode = `
인라인 요소(Inline Eleents)
- span, a, small, big, em, u, s, del, br, q, b, strong, mark, sub, sup, video, audio
- 기본 너비 값 : 컨텐츠의 너비 값 / 한 줄에 여러개 배치 / 크기 값을 가질 수 없음/ 상하 마진은 가질 수 없음

블록 요소(Block Elements)
- div, h1~h6, table, figure, figcaption, caption, header, nav, footer, section, article
aside, p, ul, ol, bolckquote, li ,td, form, fieldset, hr
- 기본 너비 값 : 100% / 한 줄에 하나만 배치 / 너비 값, 높이 값 가질 수 있음 / 상하좌우 마진 가질 수 있음

인라인 블록 요소(Inline Block Elements)
- img, input 태그들, button FontAwesome
- 기본 너비 값 : 컨텐츠의 너비 값 / 한 줄에 여러 개 배치 / 크기 값을 가질 수 있음 / 상하좌우 마진 가질 수 있음

`;

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

  const prevPage = { path: "/css/background" };
  const nextPage = { path: "/css/display" };

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
            width="30%"
            height="3rem"
            className={`${styles.skeleton} mb`}
            animation="wave"
          />
        ) : (
          <h1 className={styles.title}>CSS #블록 요소, 인라인 요소</h1>
        )}
        <section className={styles.section} id="intro">
          {loading ? (
            <>
              <Skeleton
                width="25%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />
            </>
          ) : (
            <div className={styles.descwrap}>
              <h2 className={styles.descwrap__subtitle}>
                레이아웃 스타일 - 인라인 요소 vs 블럭요소
              </h2>
            </div>
          )}
        </section>
        <section className={styles.section} id="example">
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
                <span className={styles.render__name__sub}>알아두기만해!</span>
              )}
            </p>
            <div className={styles.render__code}>
              {loading ? (
                <Skeleton
                  width="100%"
                  height="25rem"
                  className={styles.skeleton}
                  animation="wave"
                />
              ) : (
                <pre>
                  <code className="language-markup">{jobcode}</code>
                </pre>
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
                  "CSS 예제 화면"
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
                    <div className={styles.contents}>
                      <h1>블록 요소(Block Elements)</h1>
                      <div className={styles.contents__box1}></div>
                      <div className={styles.contents__box2}></div>
                      <div className={styles.contents__box3}></div>
                    </div>
                    <h1>인라인 요소(Inline Elements)</h1>
                    <div className={styles.contents2}>
                      <div className={styles.contents2__box1}></div>
                      <div className={styles.contents2__box2}></div>
                      <div className={styles.contents2__box3}></div>
                    </div>
                  </>
                )}
              </div>
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

export default Element;

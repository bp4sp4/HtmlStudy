import React, { useState, useEffect } from "react";
import styles from "./css.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-css.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const Font01 = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);

  const cssExampleCode = `국가는 지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를 진다. 
모든 국민은 종교의 자유를 가진다. 국가는 평생교육을 진흥하여야 한다. 
비상계엄이 선포된 때에는 법률이 정하는 바에 의하여 영장제도, 언론·출판·집회·결사의 자유, 
정부나 법원의 권한에 관하여 특별한 조치를 할 수 있다.`;

  const jobcode = `
  font-size : 텍스트의 크기를 지정하는 속성 
  값 : px em pt % rem /* px을 주로 사용하지만 반응형 웹 디자인은 em, rem을 사용합니다. */
  font-weight : 글꼴 두께를 지정하는 특성 /* 주로 bold, 600~700을 많이 사용합니다. */
  값 : 100~900 bold, bolder lighter normal(400=normal, 700=bold)
  line-height : 줄 간격을 지정하는 특성
  값 : px em pt % rem /* 많이 쓰지만 적절하게 보면서 사용해주는게 좋다. */
  font-family : 글꼴을 지정하는 속성 /* 폰트에따라 홈페이지 분위기가 정해진다고 생각합니다. */
  값 : font-family : 'font-name' ex) font-family ; "Noto Sans KR", sans-seif;
  font-style: 문자 스타일(기울림체)
  값 : normal italic obique /* 많이 쓰이지 않지만 알고있으면 나쁠게 없다. */
  font-variant : 소문자를 작은 크기의 대문자 보이기 (영문에만 해당됨)
  값 : small-caps normal /* 홈페이지를 만들면서 처음 알게 된 스타일 입니다. 중요 하지 않다 */
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

  const prevPage = { path: "/css/selector2" };
  const nextPage = { path: "/css/font02" };

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
            CSS #텍스트서식
          </h1>
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
                CSS 텍스트 관련 스타일 - 텍스트 서식(1)
              </h2>
              <p className={styles.descwrap__subtitle__desc}>
                아래 더미 텍스트 내용을 복사해서 알아두면 좋은 TIP CSS 텍스트
                서식을 연습하세요.
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
              "더미 텍스트"
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
                height="10rem"
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
                  height="20rem"
                  className={styles.skeleton}
                  animation="wave"
                />
              ) : (
                <pre>
                  <code className="language-css">{jobcode}</code>
                </pre>
              )}
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
                      추천 더미,폰트 사이트
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
                          href="https://fonts.google.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          구글(폰트)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://noonnu.cc/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          눈누 폰트<span className={styles.check}> (강추)</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://font.co.kr/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          FONCO(폰트)
                        </a>
                      </li>

                      <li>
                        <a
                          href="http://guny.kr/stuff/klorem/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          한글 입숨(한글 더미 사이트)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.lipsum.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          로렘 입숨(영어 더미 사이트)
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </section>
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

export default Font01;

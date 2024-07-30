import React, { useState, useEffect } from "react";
import styles from "./text.module.css";
import Header from "../header/header";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-markup.min.js";
import { Skeleton } from "primereact/skeleton";
import { NavLink } from "react-router-dom";

const Formoption2 = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const exampleCode = `<!-- input type 속성 : checkbox -->
<form>
  <input type="checkbox" checked>게임하기
  <input type="checkbox">영화관람
</form>
<!-- input type 속성 : radio -->
<form>
  <input type="radio" checked>초등학교
  <input type="radio">중학교
</form>
<!-- 폼 요소 : select, option -->
<form>
    <select>
    <option value="">Family Site</option>
    <option value="건축사무소">건축사무소</option>
    <option value="건설업체">건설업체</option>
    </select>
</form>
<!-- 폼 요소 : textarea-->
<form>
    <label for="">남기실말씀</label><br>
    <textarea rows="5" cols="40"></textarea>
</form>

`;
  const jobcode = `<select> : 드롭다운 목록 만들기
<option> : 드롭다운 목록 아이템 만들기
<textarea> : 여러 줄 입력하는 텍스트 영영 만들기
cols : 열개수 / rows : 행 개수
<!-- 폼 요소 태그 안에 속성 중에 name, id는 개발자가 다루는 속성이므로 퍼블리싱
작업에서는 크게 신경 쓸 부분은 아닙니다. 단, radio일 경우는 name 값을 동일하게 부여 해야 합니다. -->`;

  const prevPage = { path: "/html/formoption" };
  const nextPage = { path: "/html/semantictag" };

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
            width="60%"
            height="3rem"
            className={`${styles.skeleton} mb`}
            animation="wave"
          />
        ) : (
          <h1 className={styles.title}>폼 태그들2(select, option, textarea)</h1>
        )}
        <section className={styles.section} id="intro">
          {loading ? (
            <>
              <Skeleton
                width="30%"
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
                width="40%"
                height="1.5rem"
                className={styles.skeleton}
                animation="wave"
              />
            </>
          ) : (
            <div className={styles.descwrap}>
              <h2 className={styles.descwrap__subtitle}>
                웹 페이지에서의 입력 양식
              </h2>
              <p className={styles.descwrap__subtitle__desc}>
                폼태그란 웹 페이지에서의 입력 양식을 말합니다. 우리가 평소
                로그인할 때 아이디와 패스워드를 기입하는 용도로 쓰이죠. 사용자가
                기입한 정보를 백엔드서버로 전송해주는 역할을 합니다.
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
              "Form 태그 예제"
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
                "Form 태그 실행 예제 화면"
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
                  <form>
                    <input type="checkbox" checked />
                    게임하기
                    <input type="checkbox" />
                    영화관람
                  </form>
                  <form>
                    <input type="radio" checked />
                    초등학교
                    <input type="radio" />
                    중학교
                  </form>
                  <form>
                    <select className={styles.font}>
                      <option value="">Family Site</option>
                      <option value="건축사무소">건축사무소</option>
                      <option value="건설업체">건설업체</option>
                    </select>
                  </form>
                  <form className={styles.textarea}>
                    <label for="">남기실말씀</label>
                    <textarea rows="5" cols="40"></textarea>
                  </form>
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
      </main>
    </div>
  );
};

export default Formoption2;

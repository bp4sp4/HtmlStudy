import React from "react";
import Header from "../header/header";
import styles from "./main.module.css";

const Main = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main__wrap}>
        <div>
          <section className={styles.section}>
            <h2>HtmlStudy 와 함께 HTMl 태그 공부 시작 하기</h2>
            <p>
              다른 사이트들과 다르게 실속있게 <code>&lt;기본태그&gt;</code>와
              사용법을 알려드립니다.
            </p>
          </section>
          <section className={styles.section}>
            <h2>HtmlStudy 와 함께 CSS 기초 공부 시작 하기</h2>
            <p>
              HTML은 <code className={styles.code}>&lt;CSS&gt;</code>가 진짜이기
              때문에 알짜배기 사용법을 알려드리겠습니다.
            </p>
          </section>
          <section className={styles.section}>
            <h2>HtmlStudy는 HTML 을 처음 접하시는 분들도 쉽게 공부 하기</h2>
            <p>
              처음 접하는 <code className={styles.code}>&lt;HTML&gt;</code>{" "}
              태그들 직관적으로 쉽게 이해 가능하게 작성하기
            </p>
          </section>
          <section className={styles.section}>
            <h2>HtmlStudy는 출근길 퇴근길과 함께 시작 하기</h2>
            <p>
              출근길과 퇴근길 10분정도만 투자하면{" "}
              <code className={styles.code}>&lt;HTML&gt;</code> 기본태그들
              이해가 가능하다.
            </p>
          </section>
          <section className={styles.section}>
            <a className={styles.main__start__btn} href="/paragraph/paragraph">
              <p className={styles.main__start}>시작하기</p>
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Main;

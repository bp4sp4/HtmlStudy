import React, { useState } from "react";
import styles from "../paragraph/paragraph.module.css";
import Header from "../header/header";

const Paragraph = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const exampleCode = `<p>This is a paragraph.</p>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(exampleCode).then(
      () => setCopySuccess("복사 완료!"),
      () => setCopySuccess("복사 실패.")
    );
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main__wrap}>
        <h1 className={styles.title}>Paragraph(P태그)</h1>
        <section className={styles.section} id="intro">
          <div className={styles.descwrap}>
            <h2 className={styles.descwrap__subtitle}>
              P 태그 요소는 하나의 문단을 나타냅니다.
            </h2>
            <p className={styles.descwrap__subtitle__desc}>
              시각적인 매체에서, 문단은 보통 인접 블록과의 여백과 첫 줄의
              들여쓰기로 구분하지만, HTML에서 문단은 이미지나 입력 폼 등 서로
              관련있는 콘텐츠 무엇이나 될 수 있습니다.
            </p>
          </div>
        </section>
        <section className={styles.section} id="example">
          <h2 className={styles.ex__name}>P 태그 예제</h2>
          <div className={styles.codeContainer}>
            <pre>
              <code>{exampleCode}</code>
            </pre>
            <button onClick={copyToClipboard} className={styles.copyButton}>
              코드 복사
            </button>
            {copySuccess && (
              <span className={styles.copySuccess}>{copySuccess}</span>
            )}
          </div>
          <div className={styles.render__wrap}>
            <h2 className={styles.render__name}>P 태그 실행 예제 화면</h2>
            <div className={styles.render__code}>
              <p>This is a paragraph.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Paragraph;

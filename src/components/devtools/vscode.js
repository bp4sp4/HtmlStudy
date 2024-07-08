import React, { Component } from "react";
import styles from "./vscode.module.css";
import Header from "../header/header";
import ReactApexChart from "react-apexcharts";

class Vscode extends Component {
  constructor(props) {
    super(props);

    // Direct percentage data
    const worldDataInPercentages = [
      74.48, 32.15, 27.97, 27.71, 23.34, 19.8, 17.24, 16.59, 12.57, 11.61,
    ];

    const localDataInPercentages = [
      56.3, 29.6, 17.7, 12.4, 9.0, 7.4, 6.8, 5.7, 5.6, 4.6,
    ];

    this.state = {
      localSeries: [
        {
          name: "Percentage",
          data: localDataInPercentages,
        },
      ],
      worldSeries: [
        {
          name: "Percentage",
          data: worldDataInPercentages,
        },
      ],
      localOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: true,
          formatter: (val) => `${val}%`,
        },
        xaxis: {
          categories: [
            "VSCode",
            "IntelliJ",
            "Eclipse",
            "Visual Studio",
            "PyCharm",
            "Android Studio",
            "Vim",
            "Notepad++",
            "Xcode",
            "Jupyter",
          ],
        },
        tooltip: {
          y: {
            formatter: (val) => `${val}%`,
          },
        },
      },
      worldOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: true,
          formatter: (val) => `${val}%`,
        },
        xaxis: {
          categories: [
            "VSCode",
            "Visual Studio",
            "IntelliJ",
            "Notepad++",
            "Vim",
            "Android Studio",
            "PyCharm",
            "Sublime Text",
            "Eclipse",
            "IPython/Jupyter",
          ],
        },
        tooltip: {
          y: {
            formatter: (val) => `${val}%`,
          },
        },
      },
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <main className={styles.main__wrap}>
          <h1 className={styles.title}>개발자들에게 인기 있는 개발툴 TOP5</h1>
          <section className={styles.section} id="intro">
            <div className={styles.descwrap}>
              <h2 className={styles.descwrap__subtitle}>
                개발자들은 어떤 개발툴을 사용할까?
              </h2>
              <div>
                <div>세계 개발툴 순위</div>
                <div className={styles.world__chart} id="world-chart">
                  <ReactApexChart
                    options={this.state.worldOptions}
                    series={this.state.worldSeries}
                    type="bar"
                    height={350}
                  />
                </div>
                <div>국내 개발툴 순위</div>
                <div className={styles.local__chart} id="local-chart">
                  <ReactApexChart
                    options={this.state.localOptions}
                    series={this.state.localSeries}
                    type="bar"
                    height={350}
                  />
                  <span className={styles.chart__link}>
                    출처 : 프로그래머스
                  </span>
                </div>

                <div id="html-dist"></div>
              </div>
            </div>
          </section>
          <section className={styles.section} id="promotion">
            <div className={styles.descwrap}>
              <h2 className={styles.descwrap__subtitle}>
                왜 VSCode를 사용해야 할까요?
              </h2>
              <p className={styles.descwrap__text}>
                VSCode는 개발자들 사이에서 가장 인기 있는 코드 편집기 중
                하나입니다. 이는 그 강력한 기능, 사용자 친화적인 인터페이스,
                그리고 다양한 확장 프로그램 덕분입니다. 특히, 다음과 같은 이유로
                VSCode를 추천합니다
              </p>
              <ul className={styles.benefitsList}>
                <li>
                  <span className={styles.benefitsList__num}>1.</span>풍부한
                  확장 프로그램과 플러그인 지원
                </li>
                <li>
                  <span className={styles.benefitsList__num}>2.</span>다양한
                  언어에 대한 우수한 지원
                </li>
                <li>
                  <span className={styles.benefitsList__num}>3.</span>강력한
                  디버깅 기능
                </li>
                <li>
                  <span className={styles.benefitsList__num}>4.</span>다양한
                  테마와 커스터마이징 옵션
                </li>
                <li>
                  <span className={styles.benefitsList__num}>5.</span>무료로
                  제공되는 오픈소스 소프트웨어
                </li>
              </ul>
              <p className={styles.callToAction}>
                지금 바로 VSCode를 다운로드하고, &lt;HtmlStudy/&gt; 에서 학습을
                시작하세요!
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Vscode;

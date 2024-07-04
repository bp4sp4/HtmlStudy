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
            "Eclipes",
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
                <div className={styles.world__chart} id="world-chart">
                  <ReactApexChart
                    options={this.state.worldOptions}
                    series={this.state.worldSeries}
                    type="bar"
                    height={350}
                  />
                </div>
                <div className={styles.local__chart} id="local-chart">
                  <ReactApexChart
                    options={this.state.localOptions}
                    series={this.state.localSeries}
                    type="bar"
                    height={350}
                  />
                </div>
                <div id="html-dist"></div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Vscode;

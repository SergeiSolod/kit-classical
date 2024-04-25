import { FC } from "react";
import {
  StackedBarChart,
  VerticalBarChart,
  AreaChart,
  MultitypeBarChart,
  CircleChart,
} from "src/kit";
import styles from "../Kit.module.scss";
import faker from "faker";

// if you need fake data use faker@5.5.3

let GraphsPage: FC = () => {
  let labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let dataFirst = {
    labels,
    datasets: [
      {
        label: "Type 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
        backgroundColor: "rgb(0,114,240)",
      },
      {
        label: "Type 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
        backgroundColor: "rgb(0,182,203)",
      },
      {
        label: "Type 3",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
        backgroundColor: "rgb(241,1,150)",
      },
      {
        label: "Type 4",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
        backgroundColor: "rgb(255,168,0)",
      },
      {
        label: "Type 5",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
        backgroundColor: "rgb(246,109,2)",
      },
      {
        label: "Type 6",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
        backgroundColor: "rgb(124,179,66)",
      },
    ],
  };

  let dataSecond = {
    labels,
    datasets: [
      {
        label: "Type 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
        backgroundColor: "rgb(22,100,192)",
      },
    ],
  };

  let dataThird = {
    labels,
    datasets: [
      {
        label: "Type 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -10000, max: 10000 }),
        ),
        backgroundColor: "rgba(158,102,171)",
      },
    ],
  };

  let dataFourth = {
    labels,
    datasets: [
      {
        label: "Type 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: "rgba(56,73,171)",
      },
      {
        label: "Type 2",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: "rgba(255,143,0)",
      },
    ],
  };

  let dataFifth = {
    labels,
    datasets: [
      {
        label: "Type 1",
        data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
        backgroundColor: "rgba(56,73,171)",
      },
      {
        label: "Type 2",
        data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
        backgroundColor: "rgba(255,143,0)",
      },
    ],
  };

  let dataSixth = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "Type 1",
        backgroundColor: "rgba(255, 99, 132)",
        borderColor: "rgba(255, 99, 132)",
        borderWidth: 4,
        fill: false,
        data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
      },
      {
        type: "bar" as const,
        label: "Type 2",
        backgroundColor: "rgba(56,73,171)",
        data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
      },
      {
        type: "bar" as const,
        label: "Type 3",
        backgroundColor: "rgba(255,143,0)",
        data: labels.map(() => faker.datatype.number({ min: -100, max: 100 })),
      },
    ],
  };

  let dataSeventh = {
    labels,
    datasets: [
      {
        fill: false,
        label: "Type 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgba(206,112,88)",
      },
    ],
  };

  let dataEighth = {
    labels,
    datasets: [
      {
        fill: true,
        label: "Type 1",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: "rgba(0,114,240)",
        backgroundColor: "rgba(143,185,249)",
      },
    ],
  };

  let dataNinth = {
    labels: [
      "Type 1",
      "Type 2",
      "Type 3",
      "Type 4",
      "Type 5",
      "Type 6",
      "Type 7",
      "Type 8",
      "Type 9",
      "Type 10",
    ],
    datasets: [
      {
        label: "Quntity",
        data: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000],
        backgroundColor: [
          "rgba(236,64,122)",
          "rgba(255,168,0)",
          "rgba(0,168,244)",
          "rgba(0,114,240)",
          "rgba(246,109,2)",
          "rgba(124,179,66)",
          "rgba(0,182,203)",
          "rgba(93,53,177)",
          "rgba(255,112,67)",
          "rgba(241,1,150)",
        ],
        borderColor: [
          "rgba(236,64,122)",
          "rgba(255,168,0)",
          "rgba(0,168,244)",
          "rgba(0,114,240)",
          "rgba(246,109,2)",
          "rgba(124,179,66)",
          "rgba(0,182,203)",
          "rgba(93,53,177)",
          "rgba(255,112,67)",
          "rgba(241,1,150)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={styles.block}>
      <div className={styles.title}>Graphs</div>

      <div className={styles.chart}>
        <StackedBarChart data={dataFirst} title="Stacked Bar Chart" />
      </div>

      <div className={styles.chart}>
        <VerticalBarChart
          data={dataSecond}
          title="Vertical Bar Chart (positive values)"
        />
      </div>

      <div className={styles.chart}>
        <VerticalBarChart
          data={dataThird}
          title="Vertical Bar Chart (positive and negative values)"
        />
      </div>

      <div className={styles.chart}>
        <VerticalBarChart
          title="Vertical Bar Chart multiple values (positive)"
          data={dataFourth}
        />
      </div>
      <div className={styles.chart}>
        <VerticalBarChart
          title="Vertical Bar Chart multiple values (positive and negative)"
          data={dataFifth}
        />
      </div>

      <div className={styles.chart}>
        <MultitypeBarChart title="Multitype Bar Chart" data={dataSixth} />
      </div>

      <div className={styles.chart}>
        <AreaChart title={"Area Chart"} data={dataSeventh} />
      </div>

      <div className={styles.chart}>
        <AreaChart title="Area Chart filled" data={dataEighth} />
      </div>

      <div className={styles.chartCircle}>
        <CircleChart title="Circle Chart" data={dataNinth} />
      </div>
    </div>
  );
};

export default GraphsPage;

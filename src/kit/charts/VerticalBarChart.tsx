import { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface VerticalBarChartProps {
  data: any;
  title?: string;
}

let VerticalBarChart: FC<VerticalBarChartProps> = ({ data, title }) => {
  return (
    <Bar
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const,
          },
          title: {
            display: true,
            text: title,
          },
        },
      }}
      data={data}
    />
  );
};
export default VerticalBarChart;

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

interface Props {
  history:{
    date: Date,
    value: number
  }[],
  label?:string
}

const LineChart = ({ history, label }: Props) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < history?.length; i += 1) {
    coinPrice.unshift(history[i].value);
  }

  for (let i = 0; i < history?.length; i += 1) {
    coinTimestamp.unshift(new Date(history[i].date).toLocaleDateString());
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        fill: true,
        data: coinPrice,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: label,
      },
    },
  };

  return (
    <Line data={data} options={options} />
  );
};

LineChart.defaultProps = {
  label: 'data'
};

export default LineChart;

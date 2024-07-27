import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const optionsVc = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "",
    },
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
      },
    },
    y: {
      display: true,
      title: {
        display: true,
      },
      suggestedMin: 0,
    },
  },
};

const labels = [
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
  "Janeiro",
  "Fevereiro",
];

export const dataVc = {
  labels,
  datasets: [
    {
      label: "Conversão",
      data: [9.7, 9.8, 8.6, 8.5, 9.3, 8.1],
      borderColor: "rgb(53, 203, 135)",
      backgroundColor: "rgba(53, 203, 135, 0.5)",
    },
  ],
};

function GraficoPaulaConv() {
  return (
    <>
      <Line
        style={{ margin: "0.6rem auto", width: "95%" }}
        options={optionsVc}
        data={dataVc}
      />
    </>
  );
}

export default GraficoPaulaConv;

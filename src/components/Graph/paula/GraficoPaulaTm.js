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
      label: "Ticket médio",
      data: [429.32, 424.68, 452.74, 431.59, 437.28, 433.16],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function GraficoPaulaTm() {
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

export default GraficoPaulaTm;

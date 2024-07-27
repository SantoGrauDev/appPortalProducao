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
      label: "Venda video chamada",
      data: [47684.84, 58670.1, 66974.03, 53814.4, 85410.07, 32305.42],
      borderColor: "rgb(530, 162, 235)",
      backgroundColor: "rgba(530, 162, 235, 0.5)",
    },
  ],
};

function GraficoPaulaVideo() {
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

export default GraficoPaulaVideo;

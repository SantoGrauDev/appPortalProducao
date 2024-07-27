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

export const optionsVendas = {
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

export const dataVendas = {
  labels,
  datasets: [
    {
      label: "Vendas",
      data: [522915.31, 525750.75, 496658.21, 483807.13, 550536.07, 422641.97],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function GraficoPaulaVendas() {
  return (
    <>
      <Line
        style={{ margin: "0.6rem auto", width: "95%" }}
        options={optionsVendas}
        data={dataVendas}
      />
    </>
  );
}

export default GraficoPaulaVendas;

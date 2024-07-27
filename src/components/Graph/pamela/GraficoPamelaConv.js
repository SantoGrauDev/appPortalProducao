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

export const optionsConv = {
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
};

const labels = ["Setembro", "Outubro", "Novembro", "Dezembro", "Janeiro"];

export const dataConv = {
  labels,
  datasets: [
    {
      label: "Conversão últimos meses %",
      data: [10.3, 9.9, 8.2, 9.9, 10.6],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function GraficoPamelaConv() {
  return (
    <>
      <Line
        style={{ margin: "0.6rem auto", width: "100%" }}
        options={optionsConv}
        data={dataConv}
      />
      ;
    </>
  );
}

export default GraficoPamelaConv;

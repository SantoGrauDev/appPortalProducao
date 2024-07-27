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

export const options = {
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

export const data = {
  labels,
  datasets: [
    {
      label: "Vendas últimos meses",
      data: [182731.93, 165385.31, 157565.6, 167887.06, 165245.07],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function GraficoPamelaVenda() {
  return (
    <>
      <Line
        style={{ margin: "0.6rem auto", width: "100%" }}
        options={options}
        data={data}
      />
      ;
    </>
  );
}

export default GraficoPamelaVenda;

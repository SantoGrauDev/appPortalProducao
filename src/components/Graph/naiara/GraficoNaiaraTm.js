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

export const optionsTm = {
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

export const dataTm = {
  labels,
  datasets: [
    {
      label: "Tm últimos meses",
      data: [434.41, 430.26, 455.38, 427.64, 437.54],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function GraficoNaiaraTm() {
  return (
    <>
      <Line
        style={{ margin: "0.6rem auto", width: "100%" }}
        options={optionsTm}
        data={dataTm}
      />
      ;
    </>
  );
}

export default GraficoNaiaraTm;

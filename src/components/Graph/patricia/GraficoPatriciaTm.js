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
      data: [423.42, 419.2, 451.02, 440.17, 425.77],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function GraficoPatriciaTm() {
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

export default GraficoPatriciaTm;

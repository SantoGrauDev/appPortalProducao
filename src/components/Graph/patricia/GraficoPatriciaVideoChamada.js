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
};

const labels = ["Setembro", "Outubro", "Novembro", "Dezembro", "Janeiro"];

export const dataVc = {
  labels,
  datasets: [
    {
      label: "Venda video chamada últimos meses",
      data: [12342.25, 23104.3, 17031.9, 17986.75, 24023.1],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

function GraficoPatriciaVideoChamada() {
  return (
    <>
      <Line
        style={{ margin: "0.6rem auto", width: "100%" }}
        options={optionsVc}
        data={dataVc}
      />
      ;
    </>
  );
}

export default GraficoPatriciaVideoChamada;

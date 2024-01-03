'use client'

import { lineData } from "@/lib";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);
import { Bar, Doughnut, Line } from "react-chartjs-2";


const Linechart = () => {
  return (
    <div className="w-full mt-10">
    <Line
      data={{
        labels: lineData.map((data) => data.company),
        datasets: [
          {
            label: "Revenue",
            data: lineData.map((data) => data.revenue),
            backgroundColor: "#064FF0",
            borderColor: "#064FF0",
          },
          {
            label: "Cost",
            data: lineData.map((data) => data.cost),
            backgroundColor: "#FF3030",
            borderColor: "#FF3030",
          },
        ],
      }}
      options={{
        elements: {
          line: {
            tension: 0.5,
          },
        },
        plugins: {
          title: {
            text: "Monthly Revenue & Cost",
          },
        },
      }}
    />
  </div>
  )
}

export default Linechart
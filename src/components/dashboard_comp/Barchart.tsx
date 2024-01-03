'use client'
import { carloanData } from '@/lib'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);
import { Bar, Doughnut, Line } from "react-chartjs-2";

const Barchart = () => {
  return (
    <div className="w-full mt-10">
    <Bar
      data={{
        labels: carloanData.map((data) => data.licensePlate),
        datasets: [
          {
            label: "Buying Price",
            data: carloanData.map((data) => data.buyingPrice),
            backgroundColor: [
              "rgba(43, 63, 229, 0.8)",
              "rgba(250, 192, 19, 0.8)",
              "rgba(253, 135, 135, 0.8)",
            ],
            borderRadius: 5,
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            text: "Revenue Source",
          },
        },
      }}
    />
  </div>
  )
}

export default Barchart
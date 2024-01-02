'use client'
import { barData } from '@/lib'
import React from 'react'
import { Bar, Doughnut, Line } from "react-chartjs-2";
const Barchart = () => {
  return (
    <div className="dataCard customerCard">
    <Bar
      data={{
        labels: barData.map((data) => data.label),
        datasets: [
          {
            label: "Count",
            data: barData.map((data) => data.value),
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
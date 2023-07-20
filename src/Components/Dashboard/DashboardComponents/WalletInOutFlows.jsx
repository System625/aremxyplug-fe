import React from "react";
import styles from "./component.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export const WalletInOutFlows = () => {
  const data = {
    labels: [
      "0:00",
      "1:00",
      "2:00",
      "3:00",
      "4:00",
      "5:00",
      "6:00",
      "7:00",
      "8:00",
      "9:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
      "24:00",
    ], // Replace with your X-axis labels
    datasets: [
      {
        label: "Function Values, Outflows", // Replace with your data label
        data: [1,2,3,4,5,6,7,8,9,10], // Replace with your function's values
        backgroundColor: "#FA6B6B", // Optional: Background color for the chart
        borderColor: "#FA6B6B", // Optional: Border color for the chart
        borderWidth: 1, // Optional: Border width for the chart
      },
      {
        label: "Function Values, Outflows", // Replace with your data label
        data: [0, 2,4,6,8,10], // Replace with your function's values
        backgroundColor: "#58DA8F", // Optional: Background color for the chart
        borderColor: "#58DA8F", // Optional: Border color for the chart
        borderWidth: 1, // Optional: Border width for the chart
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true, // Optional: Start the Y-axis from 0
      },
    },
  };

  return (
    <div className="mt-[10%]">
      <div className="flex items-center gap-[10px]">
        <p className={styles.InOutText}>Wallets Inflows & Outflows</p>
        <img
          className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
          src="./Images/Dashboardimages/arrowright.png"
          alt="/"
        />
      </div>

      <div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

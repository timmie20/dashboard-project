import React, { useState } from "react";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const MarketingPieChart = () => {
  const data = {
    datasets: [
      {
        data: [6, 3, 1],
        backgroundColor: [
          "rgba(85, 112, 241, 1)",
          "rgba(255, 204, 145, 1)",
          "rgba(151, 165, 235, 1)",
        ],
        borderColor: [
          "rgba(85, 112, 241, 1)",
          "rgba(255, 204, 145, 1)",
          "rgba(151, 165, 235, 1)",
        ],
      },
    ],
  };

  const options = {
    cutout: "80%",
  };

  return (
    <>
      <div className="doughnut-chart relative size-52 rounded-full bg-[#EEF0FA]">
        <div className=" absolute left-[10px] top-1 w-[90%]">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default MarketingPieChart;

import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const SummaryBarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setchartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "Sept 10",
        "Sept 11",
        "Sept 12",
        "Sept 13",
        "Sept 14",
        "Sept 15",
        "Sept 16",
      ],
      datasets: [
        {
          data: [90000, 39000, 62000, 20000, 81000, 40000, 80000],
          backgroundColor: "rgba(85, 112, 241, 1)",
          //   backgroundColor: "rgba(238, 240, 250, 1)",
        },
      ],
    });
    setchartOptions({
      Plugin: {
        Legend: {
          position: "top",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className="w-[95%]">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default SummaryBarChart;

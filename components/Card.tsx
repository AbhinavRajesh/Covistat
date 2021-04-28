import { ChartOptions, ChartData } from "chart.js";
import { Line } from "react-chartjs-2";

interface CardProps {
  title: string;
  data: (string | number)[];
  labels: string[];
  total: number;
  today: number;
}

const Card = ({ title, data, labels, total, today }: CardProps) => {
  const options: ChartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        data: data,
        borderWidth: 1,
        borderColor: "white",
        label: title,
        fill: true,
        tension: 0,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div className="flex-1 p-4 card__bg m-4 rounded">
      <div>
        <div className="flex justify-between mb-4">
          <h2 className="text-white font-semibold text-2xl">{title}</h2>
          <div className="flex items-center">
            <span className="text-white text-xl">{total}</span>
            <span className="text-white text-xs px-2"> +{today}</span>
          </div>
        </div>
        <Line options={options} data={chartData} />
      </div>
    </div>
  );
};

export default Card;

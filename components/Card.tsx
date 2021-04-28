import { ChartOptions } from "chart.js";
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
    <div className="flex-1 w-full md:w-1/2 p-4 card__bg my-4 md:m-4 rounded">
      <div>
        <div className="flex justify-between mb-4">
          <h2 className="font-semibold text-xl sm:text-2xl primary-color">
            {title}
          </h2>
          <div className="flex flex-col justify-center items-end font-medium">
            <span className="text-white text-lg sm:text-xl">{total}</span>
            <span className="flex text-white text-xs items-center md:pl-2">
              <span>{today < 0 ? today : ` +${today}`}</span>
              <span className="pl-2">
                {today < 0
                  ? ((today * 100) / total).toFixed(2)
                  : `+${((today * 100) / total).toFixed(2)}`}
                %
              </span>
            </span>
          </div>
        </div>
        <Line options={options} data={chartData} />
      </div>
    </div>
  );
};

export default Card;

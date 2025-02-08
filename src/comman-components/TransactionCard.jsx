import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const TransactionCard = ({
  title,
  amount,
  percentage,
  change,
  icon,
  color,
  data,
}) => {
  return (
    <div className='p-4 rounded-md hover:shadow-md border w-full transition-all Duration-500'>
      <div className='flex justify-between items-center mb-2'>
        <div>
          <h3 className='text-sm font-medium'>{title}</h3>
          <p className='text-2xl font-semibold'>{amount}</p>
          <p
            className={`text-sm ${
              percentage > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {percentage > 0 ? "▲" : "▼"} {Math.abs(percentage)}% {change}
          </p>
        </div>
        <div
          className={`p-3 rounded-full text-white`}
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
      </div>
      {/* <Line
        data={{
          labels: data.map((_, i) => i + 1),
          datasets: [
            {
              data: data,
              borderColor: color,
              borderWidth: 2,
              fill: false,
              tension: 0.3,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { x: { display: false }, y: { display: false } },
        }}
        height={10}
      /> */}
    </div>
  );
};

export default TransactionCard;

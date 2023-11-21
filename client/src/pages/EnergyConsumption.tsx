import React from 'react'
import { Line } from "react-chartjs-2";
import { useSocket } from 'socket'
import './EnergyConsumption.css'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const EnergyConsumption = () => {
  const socket = useSocket();

  const [data, setData] = React.useState<number[]>([]);
  const [labels, setLabels] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (socket) {
      socket.on('energyConsumption', (consumption: number) => {
        setLabels(prev => {
          const newLabels = [...prev]
          if (newLabels.length >= 30) {
            newLabels.shift()
          }
          newLabels.push(new Date().getSeconds().toString())
          return newLabels
        })

        setData(prev => {
          const newData = [...prev]

          if (newData.length >= 30) {
            newData.shift()
          }
          newData.push(consumption)
          return newData
        })
      })
    }
  }, [socket])

  const key=labels.join('')

  return (
    <div className="chart-container">
      <Line
        key={key}
        data={{
          labels,
          datasets: [
            {
              label: "Energy Consumption",
              data,
              backgroundColor: ["#f71734"],
              borderColor: "#f71734",
              borderWidth: 1,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          animation: false,
          plugins: {
            title: {
              display: true,
              text: "Energy Consumption",
              font: {
                family: "Roboto",
                size: 20,
              }
            },
            legend: {
              display: true
            },
          }
        }}
      />
    </div>
  );
}
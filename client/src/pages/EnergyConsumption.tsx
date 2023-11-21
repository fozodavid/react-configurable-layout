import React from 'react'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useSocket } from 'socket'
import {
  Chart as ChartJS,
  Tooltip,
  CategoryScale,
  ChartData,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
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
              pointHitRadius: 1,
              pointBorderWidth: 1,
              animation: {
                duration: 0
              },

            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Energy Consumption",
            },
            legend: {
              display: false
            },
          }
        }}
      />
    </div>
  );
}
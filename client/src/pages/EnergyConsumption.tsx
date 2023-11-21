import React from 'react'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useSocket } from 'socket'
import {CategoryScale, ChartData} from 'chart.js'; 

Chart.register(CategoryScale);

export const EnergyConsumption = () => {
  const socket = useSocket();
  const [chartData, setChartData] = React.useState<ChartData<'line'>>({
    labels: [],
    datasets: [
      {
        label: "Energy Consumption",
        data: [],
        backgroundColor: ["black"],
        borderColor: "cyan",
        borderWidth: 4,
      },
    ],
  })

  React.useEffect(() => {
    if (socket) {
      socket.on('energyConsumption', (consumption: number) => {

        setChartData(prev => {
          const newData = [...prev.datasets[0].data]

          if (newData.length >= 5) {
            newData.shift()
          }
          newData.push(consumption)

          const newDataset = {
            ...prev.datasets[0],
            data: newData
          }

          return ({
            ...prev,
            datasets: [newDataset]
          })
        })

      })
    }
  }, [socket])

  return (
    <div className="chart-container">
      <Line
        data={chartData}
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
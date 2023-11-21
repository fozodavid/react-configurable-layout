import React from 'react'
import { Line } from "react-chartjs-2";
import { useSocket } from 'socket'
import './Chart.css'
import type { EventName } from 'types'
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

interface IChart {
  title: string;
  eventName: EventName;
  color?: string;
}
const Chart: React.FC<IChart> = ({ title, eventName, color }) => {
  const socket = useSocket();

  const [data, setData] = React.useState<number[]>([]);
  const [labels, setLabels] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (socket) {
      socket.on(eventName, (consumption: number) => {
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

  const memoizedColor = React.useMemo(() => {
    return color || "#f71734"
  }, [color])

  return (
    <div className="chart-container">
      <Line
        data={{
          labels,
          datasets: [
            {
              label: title,
              data,
              backgroundColor: memoizedColor,
              borderColor: memoizedColor,
              borderWidth: 1,
            },
          ],
        }}
        options={{
          scales: {
            y: {
              suggestedMin: 0,
              suggestedMax: 100,
            }
          },
          maintainAspectRatio: false,
          responsive: true,
          animation: false,
          elements: {
            line: {
              tension: 0.8,
            },
            point: {
              radius: 0
            }
          },
          plugins: {
            title: {
              display: true,
              text: title,
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

export default Chart;
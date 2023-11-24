import React from 'react'
import { Line } from "react-chartjs-2";
import { useSocket } from 'socket'
import ChartStyles from './Chart.module.css'
import type { IChart } from 'types'
import {
  Chart as ChartJS,
  Filler,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { MAX_DATA_POINTS } from 'consts';

ChartJS.register(
  Filler,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const Chart: React.FC<IChart> = ({ eventName, color, opacity }) => {
  const socket = useSocket();

  const [data, setData] = React.useState<number[]>([]);
  const [labels, setLabels] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (socket) {
      socket.on(eventName, (dataPoint: number) => {
        setLabels(prev => {
          const newLabels = [...prev]
          if (newLabels.length >= MAX_DATA_POINTS) {
            newLabels.shift()
          }
          newLabels.push(new Date().getSeconds().toString())
          return newLabels
        })

        setData(prev => {
          const newData = [...prev]

          if (newData.length >= MAX_DATA_POINTS) {
            newData.shift()
          }
          newData.push(dataPoint)
          return newData
        })
      })
    }
  }, [socket])

  const memoizedColor = React.useMemo(() => {
    return color || "#f71734"
  }, [color])

  return (
    <div className={ChartStyles["chart-container"]}>
      {!data.length && (<p className='h3'>No data</p>)}
      {!!data.length && (
        <Line
          data={{
            labels,
            datasets: [
              {
                label: '',
                data,
                stepped: false,
                fill: true,
                tension: 0.4,
                backgroundColor: memoizedColor + (opacity || '30'),
                borderColor: memoizedColor,
                borderWidth: 3,
              },
            ],
          }}
          options={{
            scales: {
              y: {
                suggestedMin: 40,
                suggestedMax: 100,
              },
              x: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            responsive: true,
            animation: false,
            elements: {
              point: {
                radius: 0
              }
            },
            plugins: {
              legend: {
                display: true
              },
            }
          }}
        />
      )}
    </div>
  );
}

export default Chart;
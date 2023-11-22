import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import type { Layout } from "react-grid-layout";
import { BASIC_LAYOUT } from "consts";
import { Chart } from "./components";
import { Summary } from 'components'
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./Dashboard.css";

const ReactGridLayout = WidthProvider(RGL);

interface IDashboard {
  className?: string;
  items?: number;
  rowHeight?: number;
  onLayoutChange?: (layout: any) => void;
  cols?: number;
}

const Dashboard: React.FC<IDashboard> = (props) => {

  const [ layout, setLayout ] = React.useState<Layout[]>(BASIC_LAYOUT);

  const onLayoutChange = (layout) => {
    setLayout(layout);
  }

  return (
    <div className="main">
      <ReactGridLayout
        layout={layout}
        onLayoutChange={onLayoutChange}
        {...props}
      >
        <div className="featured-chart" key="0">
          <Summary 
            title="Energy Consumption"
            value="8,684 kWh"
            change={5.58}
            timeframe="Last Week"
          />
          <i style={{position: 'absolute', top: '1rem', right: '1rem'}}className="bi bi-three-dots-vertical"></i>
          <Chart 
            title=""
            eventName="energyConsumption"
          />
        </div>
        <div className="grid-item" key="1">
          <Summary 
            compact
            title="Thoughput"
            value="6,483 Tonnes"
            change={-2.83}
            timeframe="Last Week"
          />
          <i style={{position: 'absolute', top: '1rem', right: '1rem'}}className="bi bi-three-dots-vertical"></i>
          <Chart 
            title=""
            eventName="throughput"
            color="darkgreen"
          />
        </div>
        <div className="grid-item" key="2">
          <Summary
            compact
            title="Grinding Efficiency"
            value="75.2%"
            change={1.91}
            timeframe="Last Week"
          />
          <i style={{position: 'absolute', top: '1rem', right: '1rem'}}className="bi bi-three-dots-vertical"></i>
          <Chart 
            title=""
            eventName="grindingEfficiency"
            color="black"
          />
        </div>
        <div className="grid-item" key="3">
          <i style={{position: 'absolute', top: '1rem', right: '1rem'}}className="bi bi-three-dots-vertical"></i>
          <Summary
            title="Saved Energy"
            value="1,471 kWh"
            change={3.01}
            timeframe="Last Week"
          />
        </div>
        <div className="grid-item" key="4">
          <i style={{position: 'absolute', top: '1rem', right: '1rem'}}className="bi bi-three-dots-vertical"></i>
          <Summary
            title="Cash Saved"
            value="$14,811,000"
            change={2.74}
            timeframe="Last Month"
          />
        </div>
      </ReactGridLayout>
    </div>
  );

}

export default Dashboard;
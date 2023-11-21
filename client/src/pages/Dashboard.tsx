import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import type { Layout } from "react-grid-layout";
import { BASIC_LAYOUT } from "consts";
import { Chart } from "./components";
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
        <div className="chart" key="0">
          <Chart 
            title="Energy Consumption"
            eventName="energyConsumption"
          />
        </div>
        <div className="chart" key="1">
          <Chart 
            title="Throughput"
            eventName="throughput"
            color="darkgreen"
          />
        </div>
        <div className="chart" key="2">
          <Chart 
            title="Grinding Efficiency"
            eventName="grindingEfficiency"
            color="black"
          />
        </div>
      </ReactGridLayout>
    </div>
  );

}

export default Dashboard;
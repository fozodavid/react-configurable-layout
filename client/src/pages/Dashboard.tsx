import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import type { Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { BASIC_LAYOUT } from "consts";
import "./Dashboard.css";
import { EnergyConsumption } from "./EnergyConsumption";

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

  const generateDOM = () => {
    return [
    ]
  }

  return (
    <div className="main">
      <ReactGridLayout
        layout={layout}
        onLayoutChange={onLayoutChange}
        {...props}
      >
        <div className="chart" key="0">
          <EnergyConsumption />
        </div>
        <div className="chart" key="1">
          <span className="text">1</span>
        </div>
        <div className="chart" key="2">
          <span className="text">2</span>
        </div>
      </ReactGridLayout>
    </div>
  );

}

export default Dashboard;
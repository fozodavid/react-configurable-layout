import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import type { Layout } from "react-grid-layout";
import { BASIC_LAYOUT } from "consts";
import { Summary, Chart } from 'components'
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./Dashboard.css";

import { FeaturedCard } from 'components'
import restData from 'data/restData.json'
import dashBoardConfig from 'data/dashboardConfig.json'
import layoutConfig from 'data/layoutConfig.json'


const ReactGridLayout = WidthProvider(RGL);

interface IDashboard {
  rowHeight?: number;
  cols?: number;
}

const Dashboard: React.FC<IDashboard> = (props) => {
  const [ layout, setLayout ] = React.useState<Layout[]>(BASIC_LAYOUT);

  const onLayoutChange = (layout) => {
    setLayout(layout);
  }

  const generateDOM = () => {

    console.log(layoutConfig.map((item) => {
      item.i = item.i.toString()
    }))

    return [
        <div className="featured-chart" key="0">
          <Summary 
            title="Energy Consumption"
            value="8,684 kWh"
            change={5.58}
            timeframe="Last Week"
          />
          <Chart 
            eventName="energyConsumption"
            color="#008040"
            opacity="60"
          />
        </div>
        ,
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
            eventName="throughput"
            color="#000000"
            opacity="60"
          />
        </div>,

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
            eventName="grindingEfficiency"
            color="#000000"
          />
        </div>
        ,
        <div className="grid-item" key="3">
          <i style={{position: 'absolute', top: '1rem', right: '1rem'}}className="bi bi-three-dots-vertical"></i>
          <Summary
            title="Saved Energy"
            value="1,471 kWh"
            change={3.01}
            timeframe="Last Week"
          />
        </div>
        ,
        <div className="grid-item" key="4">
          <i style={{position: 'absolute', top: '1rem', right: '1rem'}}className="bi bi-three-dots-vertical"></i>
          <Summary
            title="Cash Saved"
            value="$14,811,000"
            change={2.74}
            timeframe="Last Month"
          />
        </div>
    ]
  }

  return (
    <div className="main">
      <ReactGridLayout
        layout={layout}
        onLayoutChange={onLayoutChange}
        {...props}
      >
        {generateDOM()}
      </ReactGridLayout>
    </div>
  );
}

Dashboard.defaultProps = {
  rowHeight: 20,
  cols: 12,
};

export default Dashboard;
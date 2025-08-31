import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import type { Layout } from "react-grid-layout";
import { ISummary, IChart, IChartConfig, ILayoutConfig } from 'types';
import { Card } from 'components'
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import DashboardStyles from "./Dashboard.module.css";

import chartConfig from 'data/chartConfig.json'
import summaryData from 'data/summaryData.json'
import layoutConfig from 'data/layoutConfig.json'


const ReactGridLayout = WidthProvider(RGL);

interface IDashboard {
  rowHeight?: number;
  cols?: number;
  margin?: [number, number];
}

const Dashboard: React.FC<IDashboard> = (props) => {
  const [ layout, setLayout ] = React.useState<Layout[]>(layoutConfig);

  const onLayoutChange = (layout) => {
    setLayout(layout);
  }

  const generateDOM = () => {
    return (layoutConfig as ILayoutConfig[]).map((item) => {
      const id = item.i;
      const summaryProps: ISummary | undefined = summaryData.find((summary) => summary.id === id);
      const chartProps: IChart | undefined = (chartConfig as IChartConfig[]).find((chart) => chart.id === id);

      if (!summaryProps) {
        // TODO: raise error
        return null;
      }

      return (
        <div key={id}>
          <Card
            featured={item.featured}
            summaryProps={summaryProps}
            chartProps={chartProps}
          />
        </div>
      )
    })
  }

  return (
    <div className={DashboardStyles.main}>
      <ReactGridLayout
        layout={layout}
        onLayoutChange={onLayoutChange}
        draggableHandle=".drag-button"
        {...props}
      >
        {generateDOM()}
      </ReactGridLayout>
    </div>
  );
}

Dashboard.defaultProps = {
  rowHeight: 120,
  cols: 4,
};

export default Dashboard;

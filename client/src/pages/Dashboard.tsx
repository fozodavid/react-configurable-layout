import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import type { Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { BASIC_LAYOUT } from "consts";
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

  const generateDOM = () => {
    return _.map(_.range(props.items || 0), function(i) {
      return (
        <div className="chart" key={i}>
          <span className="text">{i}</span>
        </div>
      );
    });
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

export default Dashboard;
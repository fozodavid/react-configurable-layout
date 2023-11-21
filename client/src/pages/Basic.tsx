import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import type { Layout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { BASIC_LAYOUT } from "../consts";
import "./Basic.css";

const ReactGridLayout = WidthProvider(RGL);

interface IBasic {
  className?: string;
  items?: number;
  rowHeight?: number;
  onLayoutChange?: (layout: any) => void;
  cols?: number;
}

const Basic: React.FC<IBasic> = (props) => {

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

export default Basic;
/*
if (process.env.STATIC_EXAMPLES === true) {
  import("../test-hook.jsx").then(fn => fn.default(BasicLayout));
}
*/
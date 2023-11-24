import React from "react";
import type { ISummary, IChart } from 'types';
import Summary from "./components/Summary";
import Chart from './components/Chart';
import OptionsButton from "./components/OptionsButton";
import './Card.css';


interface ICard {
    summaryProps: ISummary;
    chartProps?: IChart;
    featured?: boolean;
}

const Card: React.FC<ICard> = ({ summaryProps, chartProps, featured }) => {
    return (
        <div className={`grid-item ${featured && 'featured'}`}>
            <OptionsButton />
            <Summary {...summaryProps } />
            {chartProps && <Chart  {...chartProps} />}
        </div>
    )
};

export default Card;
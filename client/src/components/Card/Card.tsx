import React from "react";
import type { ISummary, IChart } from 'types';
import classNames from 'classnames';
import Summary from "./components/Summary";
import Chart from './components/Chart';
import Simulation from "./components/Simulation/Simulation";
import OptionsButton from "./components/OptionsButton";
import CardStyles from './Card.module.css';


interface ICard {
    summaryProps: ISummary;
    chartProps?: IChart;
    featured?: boolean;
    simulation?: boolean;
}

const Card: React.FC<ICard> = ({ summaryProps, chartProps, featured, simulation }) => {
    return (
        <div id={simulation ? 'simulation' : ''} className={classNames(CardStyles.card, featured && CardStyles.featured)}>
            <OptionsButton />
            <Summary {...summaryProps } />
            {chartProps && <Chart  {...chartProps} />}
            {summaryProps.simulation && <Simulation />}
        </div>
    )
};

export default Card;
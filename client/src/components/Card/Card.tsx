import React from "react";
import type { ISummary, IChart } from 'types';
import classNames from 'classnames';
import Summary from "./components/Summary";
import Chart from './components/Chart';
import OptionsButton from "./components/OptionsButton";
import CardStyles from './Card.module.css';


interface ICard {
    summaryProps: ISummary;
    chartProps?: IChart;
    featured?: boolean;
}

const Card: React.FC<ICard> = ({ summaryProps, chartProps, featured }) => {
    return (
        <div className={classNames(CardStyles.card, featured && CardStyles.featured)}>
            <OptionsButton />
            <Summary {...summaryProps } />
            {chartProps && <Chart  {...chartProps} />}
        </div>
    )
};

export default Card;
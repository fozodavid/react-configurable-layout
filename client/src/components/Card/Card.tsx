import React from "react";
import type { ISummary, IChart } from 'types';
import classNames from 'classnames';
import Summary from "./components/Summary";
import Chart from './components/Chart';
import Simulation from "./components/Simulation/Simulation";
import DragButton from "./components/DragButton";
import CardStyles from './Card.module.css';


interface ICard {
    summaryProps: ISummary;
    chartProps?: IChart;
    featured?: boolean;
}

const Card: React.FC<ICard> = ({ summaryProps, chartProps, featured }) => {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);

    const onResize = () => {
      const rect = cardRef?.current?.getBoundingClientRect();
      if (rect) {
        setWidth(rect.width);
        setHeight(rect.height);
      }
    };

    React.useEffect(() => {
        onResize();
    }, [cardRef?.current?.clientHeight, cardRef?.current?.clientWidth]);

    React.useEffect(() => {
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('resize', onResize);
      }
    }, []);

    return (
        <div ref={cardRef} className={classNames(CardStyles.card, featured && CardStyles.featured)}>
            <DragButton />
            <Summary {...summaryProps } />
            {chartProps && <Chart  {...chartProps} />}
            {summaryProps.simulation && <Simulation
              cardHeight={ height|| 150 }
              cardWidth={ width || 150 }
            />}
        </div>
    )
};

export default Card;
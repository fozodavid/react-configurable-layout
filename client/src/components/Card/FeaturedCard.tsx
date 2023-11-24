import React from "react";
import Card from './Card';
import Summary from "./components/Summary";
import Chart from './components/Chart';

const FeaturedCard: React.FC = () => {
    return (
        <Card>
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
        </Card>
    )

};

export default FeaturedCard;
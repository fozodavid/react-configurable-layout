import React from 'react'
import { useStockpile } from './useStockpile'
import SimulationStyles from './Simulation.module.css'
import { NORMAL_GAP, SUMMARY_HEIGHT } from "consts";

interface ISimulation {
    cardHeight: number;
    cardWidth: number;
}

const Simulation: React.FC<ISimulation> = ({ cardHeight, cardWidth }) => {
    const ref = React.useRef<HTMLCanvasElement>(null)
    const width = Math.floor(cardWidth - NORMAL_GAP * 2);
    const height = Math.floor(cardHeight - SUMMARY_HEIGHT - NORMAL_GAP * 4);
    useStockpile({ref, height, width })

    return (
        <canvas ref={ref} className={SimulationStyles['stockpile-canvas']} />
    )
}

export default Simulation;
import React from 'react'
import { useStockpile } from './useStockpile'
import SimulationStyles from './Simulation.module.css'

interface ISimulation {
    cardHeight: number;
    cardWidth: number;
}

const Simulation: React.FC<ISimulation> = ({ cardHeight, cardWidth }) => {
    const ref = React.useRef<HTMLCanvasElement>(null)
    useStockpile({ref, cardHeight, cardWidth })

    return (
        <canvas ref={ref} className={SimulationStyles['stockpile-canvas']} />
    )
}

export default Simulation;
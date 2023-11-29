import React from 'react'
import { useStockpile } from './useStockpile'
import SimulationStyles from './Simulation.module.css'

const Simulation = () => {
    const ref = React.useRef<HTMLCanvasElement>(null)
    useStockpile({ref})

    return (
        <canvas ref={ref} className={SimulationStyles['stockpile-canvas']} />
    )
}

export default Simulation;
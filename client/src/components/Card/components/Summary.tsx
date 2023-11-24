import React from 'react'
import type { ISummary } from 'types';
import './Summary.css'

const Summary: React.FC<ISummary> = ({ title, value, timeframe, change, compact }) => {
    return (
        <div className="summary">
            <span className="summary__title">{title}</span>
            <span className={`summary__value ${compact && 'compact'}`}>{value}</span>
            <div className='summary__delta'>
                <span>{timeframe}:</span>
                <i className={`bi bi-chevron-double-${change >= 0 ? 'up positive' : 'down negative'}`}></i>
                <span className={change >= 0 ? 'positive' : 'negative'}>{change}%</span>
            </div>
        </div>
    )
}

export default Summary;
import React from 'react'
import classNames from 'classnames';
import type { ISummary } from 'types';
import Styles from './Summary.module.css'

const Summary: React.FC<ISummary> = ({ title, value, timeframe, change, compact }) => {
    const iconClass = 'bi-chevron-double-' + (change >= 0 ? 'up' : 'down');
    const changeClass = change >= 0 ? Styles.positive : Styles.negative;

    return (
        <div className={Styles.summary}>
            <span className={Styles.title}>{title}</span>
            <span className={classNames(Styles.value, compact && Styles.compact)}>{value}</span>
            <div className={Styles.delta}>
                <span>{timeframe}:</span>
                <i className={classNames('bi', iconClass, changeClass)}></i>
                <span className={changeClass}>{change}%</span>
            </div>
        </div>
    )
}

export default Summary;
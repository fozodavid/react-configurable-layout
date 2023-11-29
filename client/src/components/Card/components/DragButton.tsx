import React from "react";
import DragButtonStyles from './DragButton.module.css';
import classNames from "classnames";

const DragButton: React.FC = () => {
    return (
        <i className={classNames(DragButtonStyles["drag-button"], "drag-button bi bi-grip-vertical")}></i>
    )
};

export default DragButton;
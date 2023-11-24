import React from "react";
import OptionsButtonStyles from './OptionsButton.module.css';
import classNames from "classnames";

const OptionsButton: React.FC = () => {
    return (
        <i className={classNames(OptionsButtonStyles["options-button"], "bi bi-three-dots-vertical")}></i>
    )
};

export default OptionsButton;
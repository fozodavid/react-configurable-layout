import React from "react";
import OptionsButton from "./components/OptionsButton";


interface ICard {
    children: React.ReactNode;
}

const Card: React.FC<ICard> = ({ children }) => {
    return (
        <div className="card">
            <OptionsButton />
            {children}
        </div>
    )
}

export default Card;
import React from "react";
import "./DataGenContainer.scss";
import InfoGenContainer from "./InfoGenContainer/InfoGenContainer"

const DataGenContainer = ({perfil}) => {
    return (
    <div className="datagencon">
        <p className="p-text">En este apartado puedes acceder a la información general del perfil del usuario.</p>
        <InfoGenContainer perfil={perfil}/>
    </div>)
}

export default DataGenContainer
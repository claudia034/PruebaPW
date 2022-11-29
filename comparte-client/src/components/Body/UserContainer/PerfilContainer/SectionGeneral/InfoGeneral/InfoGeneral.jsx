import React from "react";
import "./InfoGeneral.scss";
import DataGenContainer from "./DataGenConteiner/DataGenContainer";

const InfoGeneral = ({perfil}) => {
    return (
    <div className="infogeneral">
        <h1>Un poco de información general...</h1>
        <DataGenContainer perfil={perfil}/>
    </div>)
}

export default InfoGeneral
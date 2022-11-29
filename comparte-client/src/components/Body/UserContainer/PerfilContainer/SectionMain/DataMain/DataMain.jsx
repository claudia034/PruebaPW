import React from "react";
import "./Datamain.scss";
import PerfilComp from "./PerfilComp/PerfilComp"

const DataMain = ({user}) => {
    return (
    <div className="datamain">
        <h2>Perfil</h2>
        <PerfilComp user= {user}/>
    </div>)
}

export default DataMain
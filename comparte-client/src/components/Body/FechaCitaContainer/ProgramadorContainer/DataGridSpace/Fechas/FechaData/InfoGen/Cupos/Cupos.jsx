import React from "react";
import "./Cupos.scss";

const Cupos = ({cupos, ocupados}) => {
    return (
    <div className="cupos">
        <p>{ocupados}/{cupos}</p>{/*aqui insertar los cupos disponibles, quiza hacer funcion q de formato */}
    </div>)
}

export default Cupos
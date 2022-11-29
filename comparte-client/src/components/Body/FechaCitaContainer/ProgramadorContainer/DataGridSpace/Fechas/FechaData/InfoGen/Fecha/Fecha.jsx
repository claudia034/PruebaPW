import React from "react";
import "./Fecha.scss";

const Fecha = ({fecha}) => {

    return (
    <div className="fecha">
        <p name="fecha">{fecha}</p>{/*aqui insertar la fecha, quiza hacer funcion q de formato */}
    </div>)
}

export default Fecha
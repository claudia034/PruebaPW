import React from "react";
import "./BotonVolver.scss";

const BotonVolver = ({onClick}) => {
    return (
    <div className="botonvolver">
        <button onClick={onClick}>Volver</button>
    </div>)
}

export default BotonVolver
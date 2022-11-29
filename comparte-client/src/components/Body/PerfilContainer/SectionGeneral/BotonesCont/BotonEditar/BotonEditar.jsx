import React from "react";
import "./BotonEditar.scss";

const BotonEditar = ({onClick}) => {
    return (
    <div className="botoneditar">
        <button onClick={onClick}>Editar</button>
    </div>)
}

export default BotonEditar
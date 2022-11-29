import React from "react";
import "./BotonEditarP.scss";

const BotonEditarP = ({type, handleClickPerfil}) => {
    return (
    <div className="botoneditarp">
        <button type={type}>Editar</button>
        <button onClick={handleClickPerfil}>Cancelar</button>
    </div>)
}

export default BotonEditarP
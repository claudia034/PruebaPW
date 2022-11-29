import React from "react";
import "./BotonCrearP.scss";

const BotonCrearP = ({type, onClickC}) => {
    return (
    <div className="botoncrearp">
        <button type={type}>Aceptar</button>
        <button onClick={onClickC}>Cancelar</button>
    </div>)
}

export default BotonCrearP
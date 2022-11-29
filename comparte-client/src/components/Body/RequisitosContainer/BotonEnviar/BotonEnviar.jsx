import React, { useEffect, useState } from "react";
import "./BotonEnviar.scss";

const BotonEnviar = ({type}) => {


    return (
    <div className="botonenviar">
        <button type={type}>Enviar</button>{/**si "apto" es falso, no se cumplieron los equisitos */}
    </div>)
}

export default BotonEnviar
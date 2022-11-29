import React from "react";
import "./Puntuacion.scss";

import { MdScore } from "react-icons/md";

const Puntuacion = ({puntos}) => {
    return (
    <div className="puntuacion">
        <div><figure><MdScore/></figure></div>
        <div><p>{puntos}</p></div>
    </div>)
}

export default Puntuacion
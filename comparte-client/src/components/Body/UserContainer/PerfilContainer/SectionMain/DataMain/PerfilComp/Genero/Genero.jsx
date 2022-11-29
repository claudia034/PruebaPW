import React from "react";
import "./Genero.scss";

import { MdTransgender } from "react-icons/md";

const Genero = ({gen}) => {
    return (
    <div className="genero">
        <div><figure><MdTransgender/></figure></div>
        <div><p>{gen}</p></div>
    </div>)
}

export default Genero
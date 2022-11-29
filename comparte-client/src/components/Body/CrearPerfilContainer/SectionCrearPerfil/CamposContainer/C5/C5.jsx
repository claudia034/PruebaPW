import React from "react";
import "./C5.scss";

import { MdTransgender } from "react-icons/md";

const C5 = () => {
    return (
    <div className="c5">
        <figure><MdTransgender/></figure>
        <div action="">
            <select name="genero" id="Genero">
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
            </select>
        </div>
    </div>)
}

export default C5
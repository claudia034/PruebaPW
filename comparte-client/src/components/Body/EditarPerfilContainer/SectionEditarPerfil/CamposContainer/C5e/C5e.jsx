import React from "react";
import "./C5e.scss";

import { MdTransgender } from "react-icons/md";

const C5e = () => {
    return (
    <div className="c5e">
        <figure><MdTransgender/></figure>
        <div action="">
            <select name="Genero" id="Genero" disabled>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
            </select>
        </div>
    </div>)
}

export default C5e
import React from "react";
import "./C3e.scss";

import { MdBloodtype } from "react-icons/md";

const C3e = () => {
    return (
    <div className="c3e">
        <figure><MdBloodtype/></figure>
        <div action="">
            <select name="Tipo-Sangre" id="Tipo-Sangre" placeholder="Tipo de sangre" disabled>
                <option value="ORH+">ORH+</option>
                <option value="ORH-">ORH-</option>
            </select>
        </div>
    </div>)
}

export default C3e
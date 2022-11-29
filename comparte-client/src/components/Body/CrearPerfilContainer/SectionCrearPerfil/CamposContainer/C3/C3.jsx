import React from "react";
import "./C3.scss";

import { MdBloodtype } from "react-icons/md";

const C3 = () => {
    return (
    <div className="c3">
        <figure><MdBloodtype/></figure>
        <div action="">
            <select name="Tipo-Sangre" id="Tipo-Sangre" placeholder="Tipo de sangre">
                <option value="ORH+">O+</option>
                <option value="ORH-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
            </select>
        </div>
    </div>)
}

export default C3
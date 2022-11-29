import React from "react";
import "./C8e.scss";

import { MdPhoneMissed } from "react-icons/md";

const C8e = () => {
    return (
    <div className="c8e">
        <figure><MdPhoneMissed/></figure>
        <div>
            <input name="telE" type="tel" placeholder="Telefono de emergencia, ej: 1234-5678" id="tel-e" pattern="[2, 6, 7][0-9]{3}-[0-9]{4}"
            title="El formato de teléfono debe contener 8 números separando los primeros 4 dígitos con '-', ej: 1234-5678"/>
        </div>
    </div>)
}

export default C8e
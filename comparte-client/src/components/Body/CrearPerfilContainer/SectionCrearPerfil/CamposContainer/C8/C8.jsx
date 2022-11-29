import React from "react";
import "./C8.scss";

import { MdPhoneMissed } from "react-icons/md";

const C8 = () => {
    return (
    <div className="c8">
        <figure><MdPhoneMissed/></figure>
        <div>
            <input type="tel" placeholder="Telefono de emergencia, ej: 1234-5678" id="tel-e" pattern="[2, 6, 7][0-9]{3}-[0-9]{4}" name="telE"
            title="El formato de teléfono debe contener solo números separando los primeros 4 dígitos con '-', ej: 1234-5678"/>
        </div>
    </div>)
}

export default C8
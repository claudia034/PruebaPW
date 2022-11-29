import React from "react";
import "./C6.scss";

import { MdLocalPhone } from "react-icons/md";

const C6 = () => {
    return (
    <div className="c6">
        <figure><MdLocalPhone /></figure>
        <div>
            <input type="tel" placeholder="Número de telefono, ej: 1234-5678" id="tel" pattern="[2, 6, 7][0-9]{3}-[0-9]{4}" name="tel"
            title="El formato de teléfono debe contener 8 números separando los primeros 4 dígitos con '-', ej: 1234-5678"/>
        </div>
    </div>)
}

export default C6
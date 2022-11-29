import React from "react";
import "./C1e.scss";

import { MdOutlineEmail } from "react-icons/md";

const C1e = () => {
    return (
    <div className="c1e">
        <figure><MdOutlineEmail/></figure>
        <div>
            <input type="email" placeholder="Correo electrónico" id="email" disabled/>
            {/** aqui de placeholder se puede incertar el dato de la persona, en este caso el correo de la persona */}
        </div>
    </div>)
}

export default C1e
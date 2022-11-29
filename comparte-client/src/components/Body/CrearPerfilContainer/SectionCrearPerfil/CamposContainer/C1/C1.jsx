import React from "react";
import "./C1.scss";

import { MdOutlineEmail } from "react-icons/md";

const C1 = () => {
    return (
    <div className="c1">
        <figure><MdOutlineEmail/></figure>
        <div>
            <input type="email" placeholder="Correo electrónico" id="email" name="email" pattern=".+@gmail.com"
            title="Solo se aceptan correos de google (gmail), ej: algo@gmail.com"/>
        </div>
    </div>)
}

export default C1
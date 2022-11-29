import React from "react";
import "./C2.scss";

import { MdPermIdentity } from "react-icons/md";

const C2 = () => {
    return (
    <div className="c2">
        <figure><MdPermIdentity/></figure>
        <div>
            <input type="text" placeholder="DUI" id="dui" name="dui" pattern="[0-9]{8}-[0-9]{1}" maxLength={10}
            title="El formato de dui debe contener solo números separando el último digito con '-', ej: 12345678-1"/>
        </div>
    </div>)
}

export default C2
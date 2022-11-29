import React from "react";
import "./C7.scss";

import { MdPersonAddAlt1 } from "react-icons/md";

const C7 = () => {
    return (
    <div className="c7">
        <figure><MdPersonAddAlt1/></figure>
        <div>
            <input type="text" placeholder="Nombre de persona de emergencia" id="nameE" name="nameE"/>
        </div>
    </div>)
}

export default C7
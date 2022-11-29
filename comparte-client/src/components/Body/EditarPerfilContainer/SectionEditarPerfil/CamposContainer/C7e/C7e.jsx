import React from "react";
import "./C7e.scss";

import { MdPersonAddAlt1 } from "react-icons/md";

const C7e = () => {
    return (
    <div className="c7e">
        <figure><MdPersonAddAlt1/></figure>
        <div>
            <input type="text" placeholder="Nombre de persona de emergencia" id="nameE" name="nameE"/>
        </div>
    </div>)
}

export default C7e
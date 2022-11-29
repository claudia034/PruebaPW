import React from "react";
import "./C4e.scss";

import { MdDateRange } from "react-icons/md";

const C4e = () => {
    return (
    <div className="c4e">
        <figure><MdDateRange/></figure>
        <div>
            <input type="date" placeholder="Fecha de nacimiento" id="nacimiento" disabled/>
        </div>
    </div>)
}

export default C4e
import React from "react";
import "./C4.scss";

import { MdDateRange } from "react-icons/md";

const C4 = () => {
    return (
    <div className="c4">
        <figure><MdDateRange/></figure>
        <div>
            <input type="date" placeholder="Fecha de nacimiento" id="nacimiento" name="nacimiento" />
        </div>
    </div>)
}

export default C4
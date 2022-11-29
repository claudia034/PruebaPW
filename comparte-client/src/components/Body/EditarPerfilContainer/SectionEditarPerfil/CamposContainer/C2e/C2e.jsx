import React from "react";
import "./C2e.scss";

import { MdPermIdentity } from "react-icons/md";

const C2e = () => {
    return (
    <div className="c2e">
        <figure><MdPermIdentity/></figure>
        <div>
            <input type="text" placeholder="DUI" id="dui" disabled/>
        </div>
    </div>)
}

export default C2e
import React from "react";
import "../C2/C2.scss";

import { MdDriveFileRenameOutline } from "react-icons/md";

const C11 = () => {
    return (
    <div className="c2">
        <figure><MdDriveFileRenameOutline/></figure>
        <div>
            <input type="text" placeholder="Nombre" id="name" name="name"/>
        </div>
    </div>)
}

export default C11
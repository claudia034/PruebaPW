import React from "react";
import "./TelefonoE.scss";

import { MdPhone } from "react-icons/md";

const TelefonoE = ({telE}) => {
    return (
    <div className="telefono2">
        <div><figure><MdPhone/></figure></div>
        <div><p>{telE}</p></div>
    </div>)
}

export default TelefonoE
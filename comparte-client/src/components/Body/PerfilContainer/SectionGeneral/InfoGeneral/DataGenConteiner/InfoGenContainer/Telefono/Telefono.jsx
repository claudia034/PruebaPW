import React from "react";
import "./Telefono.scss";

import { MdPhone } from "react-icons/md";

const Telefono = ({tel}) => {
    return (
    <div className="telefono">
        <div><figure><MdPhone/></figure></div>
        <div><p>{tel}</p></div>
    </div>)
}

export default Telefono
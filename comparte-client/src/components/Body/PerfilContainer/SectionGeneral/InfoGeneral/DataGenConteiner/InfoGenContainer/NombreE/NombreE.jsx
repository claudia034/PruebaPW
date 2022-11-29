import React from "react";
import "./NombreE.scss";

import { MdOutlinePersonPin } from "react-icons/md";

const NombreE = ({nameE}) => {
    return (
    <div className="nombre2">
        <div><figure><MdOutlinePersonPin/></figure></div>
        <div><p>{nameE}</p></div>
    </div>)
}

export default NombreE
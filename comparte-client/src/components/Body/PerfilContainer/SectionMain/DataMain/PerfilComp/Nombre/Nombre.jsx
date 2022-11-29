import React from "react";
import "./Nombre.scss";

import { MdPeople } from "react-icons/md";

const Nombre = ({name}) => {
    return (
    <div className="nombre">
        <div><figure><MdPeople/></figure></div>
        <div><p>{name}</p></div>
    </div>)
}

export default Nombre
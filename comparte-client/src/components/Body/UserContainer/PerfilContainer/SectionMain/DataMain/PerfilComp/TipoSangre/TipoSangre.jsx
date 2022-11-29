import React from "react";
import "./TipoSangre.scss";

import { MdBloodtype } from "react-icons/md";

const TipoSangre = ({sangre}) => {
    return (
    <div className="sangre">
        <div><figure><MdBloodtype/></figure></div>
        <div><p>{sangre}</p></div>
    </div>)
}

export default TipoSangre
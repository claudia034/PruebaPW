import React from "react";
import "./Dui.scss";

import { MdPortrait } from "react-icons/md";

const Dui = ({dui}) => {
    return (
    <div className="dui">
        <div><figure><MdPortrait/></figure></div>
        <div><p>{dui}</p></div>
    </div>)
}

export default Dui
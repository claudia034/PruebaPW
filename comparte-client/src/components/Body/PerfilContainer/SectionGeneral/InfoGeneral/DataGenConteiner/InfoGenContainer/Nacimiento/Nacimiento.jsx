import React from "react";
import "./Nacimiento.scss";

import { MdCalendarToday } from "react-icons/md";

const Nacimiento = ({nacimiento}) => {
    return (
    <div className="nacimiento">
        <div><figure><MdCalendarToday/></figure></div>
        <div><p>{nacimiento}</p></div>
    </div>)
}

export default Nacimiento
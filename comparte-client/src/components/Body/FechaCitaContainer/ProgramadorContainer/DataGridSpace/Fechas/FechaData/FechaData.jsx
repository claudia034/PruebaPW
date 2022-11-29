import React from "react";
import "./FechaData.scss";
import InfoGen from "./InfoGen/InfoGen";

import { MdEditCalendar } from "react-icons/md";

const FechaData = ({dates}) => {
    return (
    <div className="fechadata">
        <figure><MdEditCalendar/></figure>
        <InfoGen dates={dates}/>
    </div>)
}

export default FechaData
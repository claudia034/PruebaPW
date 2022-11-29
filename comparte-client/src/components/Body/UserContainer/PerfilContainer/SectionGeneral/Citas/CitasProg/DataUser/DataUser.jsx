import React from "react";
import "./DataUser.scss";
import DataGen from "./DataGen/DataGen";

import { MdPerson } from "react-icons/md";

const DataUser = ({name, cita}) => {
    return (
    <div className="datauser">
        <figure><MdPerson/></figure>
        <DataGen name={name} cita={cita}/>
    </div>)
}

export default DataUser
import React from "react";
import "./DataGen.scss";
import Fecha from "./Fecha/Fecha";
import HoraConf from "./HoraConf/HoraConf"
import UserName from "./Username/UserName";

const DataGen = ({name, cita}) => {

    const fechaCita = new Date(cita.fechaCita);

    const fecha = fechaCita.toISOString().substring(0,10);

    return (
    <div className="datagen">
        <UserName name={name} lugar={cita.lugar}/>
        <HoraConf hora={cita.horaCita}/>
        <Fecha fecha={fecha}/>
    </div>)
}

export default DataGen
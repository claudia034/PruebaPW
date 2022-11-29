import React from "react";
import "./InfoGen.scss";
import Fecha from "./Fecha/Fecha";
import Cupos from "./Cupos/Cupos";
import SeleccionarFecha from "./SeleccionarFecha/SeleccionarFecha";

const InfoGen = ({dates}) => {

    const fechaCita = new Date(dates.fechaCita);

    const fecha = fechaCita.toISOString().substring(0,10);

    return (
    <div className="infogen">
        <Fecha fecha={fecha}/>
        <Cupos cupos={dates.cupos} ocupados={dates.ocupados}/>
        <SeleccionarFecha type="submit" dateInfo={dates} />
    </div>)
}

export default InfoGen
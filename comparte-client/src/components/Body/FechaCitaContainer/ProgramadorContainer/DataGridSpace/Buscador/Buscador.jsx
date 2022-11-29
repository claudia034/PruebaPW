import React from "react";
import "./Buscador.scss";
import Buscar from "./Buscar/Buscar";
import Filtros from "./Filtros/Filtros";

const Buscador = () => {
    return (
    <div className="buscador">
        <Filtros/>
        <Buscar/>
    </div>)
}

export default Buscador
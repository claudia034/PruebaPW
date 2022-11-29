import React from "react";
import "./InfoGenContainer.scss";
import Nacimiento from "./Nacimiento/Nacimiento";
import Telefono from "./Telefono/Telefono";
import NombreE from "./NombreE/NombreE";
import TelefonoE from "./TelefonoE/Telefono";
import Puntuacion from "./Puntuacion/Puntuacion"

const InfoGenContainer = ({perfil}) => {
    return (
    <div className="infogencon">
        <Nacimiento nacimiento={perfil.dateBirth}/>
        <Telefono tel={perfil.phone}/>
        <NombreE nameE={perfil.emergencyName}/>
        <TelefonoE telE={perfil.emergencyPhone}/>
        <Puntuacion puntos={perfil.puntaje}/>
    </div>)
}

export default InfoGenContainer;
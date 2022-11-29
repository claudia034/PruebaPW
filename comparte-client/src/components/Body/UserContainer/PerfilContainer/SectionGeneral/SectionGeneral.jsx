import React from "react";
import "./SectionGeneral.scss";

import InfoGeneral from "./InfoGeneral/InfoGeneral";
import Flechita2 from "./Flechita2/Flechita2"
import Citas from "./Citas/Citas"
import BotonesCont from "./BotonesCont/BotonesCont"

const SectionGeneral = ({handleClick, handleClick2 , perfil}) => {

    {/**CREACION DE FUNCION DE EDICION DEL PERFIL */}

    return (
    <div className="sectiongeneral">
        <InfoGeneral perfil={perfil}/>
        <Flechita2/>
        <Citas dui={perfil.dui} name={perfil.username}/>
        <BotonesCont handleClick={handleClick} handleClick2={handleClick2}/>
    </div>)
}

export default SectionGeneral
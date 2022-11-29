import React from "react";
import "./SectionGeneral.scss";

import InfoGeneral from "./InfoGeneral/InfoGeneral";
import Flechita2 from "./Flechita2/Flechita2"
import Citas from "./Citas/Citas"
import BotonesCont from "./BotonesCont/BotonesCont"

import { useUserContext } from "../../../../contexts/UserContext";

const SectionGeneral = ({handleClick, handleClick2}) => {

    const { user } = useUserContext();

    {/**CREACION DE FUNCION DE EDICION DEL PERFIL */}

    return (
    <div className="sectiongeneral">
        <InfoGeneral perfil={user}/>
        <Flechita2/>
        <Citas dui={user.dui} name={user.username}/>
        <BotonesCont handleClick={handleClick} handleClick2={handleClick2}/>
    </div>)
}

export default SectionGeneral
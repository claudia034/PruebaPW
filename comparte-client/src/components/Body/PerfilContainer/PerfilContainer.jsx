import React, { useState, useEffect } from "react";
import "./PerfilContainer.scss";

import SectionMain from "./SectionMain/SectionMain"
import Flechita from "./Flechita/Flechita";
import SectionGeneral from "./SectionGeneral/SectionGeneral";

import {useNavigate } from 'react-router-dom';

import { useUserContext } from "../../../contexts/UserContext";

const PerfilContainer = () => {

    const { user } = useUserContext();

    //-------------
    let history = useNavigate();

    const handleClick = () => {//funcion para ir a pagina de inicio
        history("/");
    }
    const handleClick2 = () => {//funcion para ir a vista de editar perfil
        history("/user/edit-profile");
    }

    return (
    <div className="perfilContainer">
        <SectionMain/>
        <Flechita/>
        <SectionGeneral perfil={user} handleClick={handleClick} handleClick2={handleClick2}/>
    </div>)
}

export default PerfilContainer
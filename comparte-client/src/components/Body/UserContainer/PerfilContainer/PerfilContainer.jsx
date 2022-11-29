import React, { useState, useEffect } from "react";
import "./PerfilContainer.scss";

import SectionMain from "./SectionMain/SectionMain"
import Flechita from "./Flechita/Flechita";
import SectionGeneral from "./SectionGeneral/SectionGeneral";

import {useNavigate } from 'react-router-dom';

const PerfilContainer = ({user}) => {

    let history = useNavigate();

    const handleClick = () => {//funcion para ir a pagina de inicio
        history("/");
    }
    const handleClick2 = () => {//funcion para ir a vista de editar perfil
        history("/admin/users");
    }

    return (
    <div className="perfilContainer">
        <SectionMain user={user}/>
        <Flechita/>
        <SectionGeneral perfil={user} handleClick={handleClick} handleClick2={handleClick2}/>
    </div>)
}

export default PerfilContainer
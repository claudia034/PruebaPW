import React from "react";
import "./BotonesCont.scss";
import BotonEditar from "./BotonEditar/BotonEditar";
import BotonVolver from "./BotonVolver/BotonVolver";

import {useNavigate } from 'react-router-dom';

const BotonesCont = ({handleClick, handleClick2}) => {
    //--------

    return (
    <div className="botonescont">
        <BotonVolver onClick={handleClick}/>
        <BotonEditar onClick={handleClick2}/>
    </div>)
}

export default BotonesCont
import React from "react";
import "./Fecha.scss";

import { MdOutlineEditCalendar } from "react-icons/md";

const Fecha = ({fecha}) => {

    {/**CREAR FUNCION PARA DAR FORMATO A LA FECHA */}

    return (
    <div className="fecha">
        <figure><MdOutlineEditCalendar/></figure>

        <p>{fecha}</p>{/*aqui insertar la fecha, quiza hacer funcion q de formato */}
    </div>)
}

export default Fecha
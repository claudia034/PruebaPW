
// IMPORTAMOS LA LIBRERIA 

import React from "react";

// IMPORTAR EL MODULO CSS

import classes from './NewDate.module.scss';

// IMPORTAMOS LOS ICONOS

import { MdFemale } from "react-icons/md";

import { MdMale } from "react-icons/md";

import { MdPerson } from "react-icons/md";

// IMPORTAMOS LAS DEPENDECIAS

import DivAssit from "../DivAssit/DivAssit";

// CREAMOS EL COMPONENTE 

const NewDate = ({ place, date, ocupados, cupos}) => {
    return (

        <div className={classes["table-container"]}>
            <div className={classes["table-name-icon"]}>
                <MdPerson className={classes["icon"]} />
                <p>
                    {place}
                </p>
            </div>
            <p> {date} </p>
            <div className={classes["table-name-icon"]}>
                <MdMale className={classes["icon"]} />
                <p> {ocupados} / {cupos}  </p>
            </div>
        </div>
    )

};

// EXPORTAMOS EL COMPONENTE

export default NewDate;

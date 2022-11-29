
// IMPORTAMOS LA LIBRERIA 

import React from "react";

// IMPORTAR EL MODULO CSS

import classes from './NewUser.module.scss';

// IMPORTAMOS LOS ICONOS

import { MdFemale , MdMale, MdPerson, MdOutlineShowChart  } from "react-icons/md";

// CREAMOS EL COMPONENTE 

const NewUser = ({ username, puntaje, gender }) => {

    return (
        <div className={classes["table-container"]}>

            <div className={classes["table-name-icon"]}>
                <MdPerson className={classes["icon"]} />
                <p>
                    {username}
                </p>
            </div>
            <div className={classes["table-name-icon"]}>
                <MdOutlineShowChart className={classes["icon"]} />
                <p> {puntaje} points</p>
            </div>
            <div className={classes["table-name-icon"]}>
                {
                    gender == "male" ? <MdMale className={classes["icon"]} /> : <MdFemale className={classes["icon"]} />
                }
                <p> {gender} </p>
            </div>
        </div>
    );
};

// EXPORTAMOS EL COMPONENTE

export default NewUser;


// IMPORTAMOS LA LIBRERIA 

import React from "react";

// IMPORTAR EL MODULO CSS

import classes from './NewUser.module.scss';

// IMPORTAMOS LOS ICONOS

import { MdFemale } from "react-icons/md";

import { MdMale } from "react-icons/md";

import { MdPerson } from "react-icons/md";

import {useNavigate } from "react-router";

// CREAMOS EL COMPONENTE 

const NewUser = ({username, bloodtype, phone, gender}) => {

    return (
        <div className={classes["table-container"]} >
            <div className={classes["table-name-icon"]}>
                <MdPerson className={classes["icon"]} />
                <p>
                    {username}
                </p>
            </div>
            <p>
                {bloodtype}
            </p>
            <p>
                {phone}
            </p>
            <div className={classes["table-name-icon"]}>
                {
                    gender == "male"? <MdMale className={classes["icon"]} /> : <MdFemale className={classes["icon"]} />
                }
                <p> {gender} </p>
            </div>
        </div>
    );
};

// EXPORTAMOS EL COMPONENTE

export default NewUser;

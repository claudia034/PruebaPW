
// IMPORTAMOS LA LIBRERIA 

import { useState } from "react";

// IMPORTAR EL MODULO CSS

import classes from './DivAssit.module.scss';

// IMPORTAMOS LAS DEPENDECIAS

import { MdCheck } from "react-icons/md";

import { MdClose } from "react-icons/md";

import ButtonAssit from "./Button/Button"


// CREAMOS EL COMPONENTE 

const DivAssit = () => {

    const [iconCheck, setIconCheck] = useState(true);
    const [iconClose, setIconClose] = useState(false);

    const iconCheckHandler = () =>
    {
        setIconCheck(true);
        setIconClose(false);

        if(iconClose === false)
        {
            iconCloseHandler();
        }
    }

    const iconCloseHandler = () =>
    {
        setIconCheck(false);
        setIconClose(true);
    }

    return (
        <div className={classes["table-name-icon"]}>
            {iconCheck && (
                <MdCheck className={classes["icon"]}/>
            )}
            {iconClose && (
                <MdClose className={classes["icon"]}/>
            )}
            <ButtonAssit text = "Asistió" onClick={iconCheckHandler}/>
        </div>
    );
};

// EXPORTAMOS EL COMPONENTE

export default DivAssit;

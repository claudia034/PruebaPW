
// IMPORTAMOS LA LIBRERIA 

import React from "react";

// IMPORTAR EL MODULO CSS

import classes from './Button.module.scss';

// IMPORTAMOS LAS DEPENDECIAS

import Button from '@mui/material/Button';

// CREAMOS EL COMPONENTE 

const AssitButton = ({ onClick , className, text, type}) => {
    return (
        <Button className={`${classes["box-button"]} ${className ?? ""}`} onClick={onClick} type = {type}
        sx={{
            color: '#FFFFFF',
            background: '#F45652',
            textTransform: 'none',
            margin: '0',
            padding: '0',
            fontSize: '1vmax',
            fontStyle: 'normal',
            fontWeight: 'normal',
            transition: '0.5s',

            '&:hover': {
                background: '#F45652',
                color: '#FFFFFF',
            },
          }} >
            {text}
        </Button>
    );
};

// EXPORTAMOS EL COMPONENTE

export default AssitButton;

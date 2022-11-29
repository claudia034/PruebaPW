import React , {useState} from 'react';

import classes from './NavbarButton.module.scss';

import Button from '@mui/material/Button';

import { MdPerson, MdKeyboardArrowDown } from "react-icons/md";


const NavbarButton = ({onClick, text, type, isLogs}) => {

    return (
        <Button 
        onClick = {onClick} 
        type={type} 
        className={classes["nav-button"]}
        sx={{
            color: 'black',
            background: '#F5F5F5',
            textTransform: 'none',
            margin: '0',
            padding: '0',
            fontSize: '1vmax',
            fontStyle: 'normal',
            fontWeight: 'normal',
            transition: '0.5s',

            '&:hover': {
                opacity: '75%',
                background: 'white',
                color: 'black',
                transform: 'scale(1.025)',
                cursor: 'pointer',
            },
          }} >
            <MdPerson className={classes["nav-icon"]} />
            {text}
            {
                isLogs ? <MdKeyboardArrowDown className={classes["nav-icon"]} /> : null
            }
        </Button>
    );
}

export default NavbarButton;
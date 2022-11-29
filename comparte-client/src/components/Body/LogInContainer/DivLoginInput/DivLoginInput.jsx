
// IMPORTAMOS LA LIBRERIA 

import React, { useState } from "react";
 
import axios from 'axios';

import { toast } from 'react-toastify';

// IMPORTAR EL MODULO CSS

import classes from './DivLoginInput.module.scss';

import {useNavigate, Link } from 'react-router-dom';

// IMPORTAMOS LOS ICONOS

import { MdMailOutline, MdCreditCard, MdPassword } from "react-icons/md";

// IMPORTAMOS LAS DEPENDECIAS

import Button from './../../DatesContainer/DivAssit/Button/Button';

// CREAMOS EL COMPONENTE 

const LogInContainer = ( { onLoginDo } ) => {

    const navigate = useNavigate();
    // FORM HANDLER  - MANUAL AUTH ----------------------------

    const [dui, setDUI] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const errors = {
        "dui": !dui,
        "email": !email.length > 0 && (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/).test(email),
        "password": !password || password.length < 8,
    }

    // ERRORES

    const hasErrors = () => Object.values(errors).some(error => error);

    // MANEJAR EL SUBMIT DEL FORM

    const onSubmitHandler = (e) => {
        e.preventDefault();
    
        if (hasErrors()) {
          toast.warn("Wrong fields");
          return;
        }

        const user = { dui : dui, password : password};
    
        onLoginDo(user);
    }

    const onCancelHandler = (e) => {
        e.preventDefault();
        navigate("/");
    }
    

    return (
        <form onSubmit={onSubmitHandler} className={classes["form-container"]}>
            <div className={classes["login-input"]}>

                <MdMailOutline className={classes["icon"]} />

                <input
                    title="Debes respetar el formato del correo. Ejemplo (usuario@gmail.com) (Debe pertenecer a google (gmail))"
                    pattern=".+@gmail\.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete='email'
                    placeholder="Correo electrónico"
                />

            </div>

            <div className={classes["login-input"]}>
                <MdCreditCard className={classes["icon"]} />
                <input 
                    type="text"
                    title="Debes respetar el formato del DUI. Ejemplo (9999999-9)"
                    required
                    value={dui}
                    onChange={(e) => setDUI(e.target.value)}
                    autoComplete='DUI'
                    placeholder="DUI"
                    maxLength="10"
                />
            </div>

            <div className={classes["login-input"]}>
                <MdPassword className={classes["icon"]} />
                <input
                    type="password"
                    value={password}
                    title="La contraseña debe de tener entre 8 y 32 chars, y al menos 1 M, 1 m y 1 #"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    autoComplete='password'
                    minLength="8"
                />
            </div>

            <div className={classes["login-buttons"]}>

                <Button text="Aceptar" type="submit" disabled={hasErrors()}/>
                <Button text="Cancelar" onClick={onCancelHandler}/>

            </div>

            <p> ¿No tienes una cuenta? <Link to="/user/create-profile"> <strong>Crea tu perfil </strong> </Link></p>
        </form>
    );
};

// EXPORTAMOS EL COMPONENTE

export default LogInContainer;

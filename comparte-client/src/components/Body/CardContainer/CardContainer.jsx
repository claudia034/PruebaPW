
// IMPORTAMOS LA LIBRERIA 

import React from "react";

// IMPORTAR EL MODULO CSS

import classes from './CardContainer.module.scss';

// IMPORTAMOS LOS ICONOS

import points from '../../../assets/images/time_line.svg';

import users from '../../../assets/images/users-icon.svg';

// IMPORTAMOS LAS DEPENDECIAS

import { useNavigate } from "react-router";

import Button from './../DatesContainer/DivAssit/Button/Button';

// CREAMOS EL COMPONENTE 

const CardContainer = () => {

    // NAVEGACION

    const navigate = useNavigate();

    const onClickHandler = (e) => {
        e.preventDefault();

        navigate("/admin/points");
    }

    const onClickHandlerUsers = (e) => {
        e.preventDefault();

        navigate("/admin/users");
    }


    return (
        <section className={classes["image-section"]}>

            <div className={classes["card"]}>
                
                <h1> Registro de puntaje </h1>
                
                <p> En esta seccion podras encontrar el registro de puntos de todos los usuarios. </p>
                
                <figure>
                    <img src={points} alt="ComparteINC Logo"></img>
                </figure>
                
                <Button text="Ingresar" onClick={onClickHandler} className={classes["card-button"]} />
            </div>
            
            <div className={classes["card"]}>
                
                <h1> Registro de usuarios </h1>
                
                <p> En esta seccion podras encontrar el registro de  la lista de usuarios. </p>
                
                <figure>
                    <img src={users} alt="ComparteINC Logo"></img>
                </figure>
                
                <Button text="Ingresar" onClick={onClickHandlerUsers} className={classes["card-button"]} />
            </div>
        </section>
    );
};

// EXPORTAMOS EL COMPONENTE

export default CardContainer;

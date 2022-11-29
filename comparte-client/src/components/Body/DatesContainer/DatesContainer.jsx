
// IMPORTAMOS LA LIBRERIA 

import React, { useState } from "react";

import { useEffect } from "react";

import { useNavigate } from "react-router";

import { toast } from "react-toastify";

// IMPORTAR EL MODULO CSS

import classes from './DatesContainer.module.scss';

// IMPORTAMOS LOS ICONOS

import search from '../../../assets/images/search-icon.png';

// IMPORTAMOS LAS DEPENDECIAS

import Button from '@mui/material/Button';

import NewDate from "./NewDate/NewDate";
import axios from "axios";

// CREAMOS EL COMPONENTE 

const CardContainer = () => {

    const [dates, setDates] = useState([]);

    useEffect(() => {
        fetchDatesInfo();
    }, []);

    const navigate = useNavigate();

    // OBTENER TODOS LOS USUARIOS

    const fetchDatesInfo = async () => {
        try {
            const {data } = await axios.get("/date/getDates");
            setDates(data.dates);

        } catch (error) {
            const { status } = error.response || { status: 500 };
            const msgs = {
                "404": "Dates not found",
                "401": "Unauthorized",
                "500": "Unexpected error"
            };
            toast.error(msgs[String(status)]);
        } 
    }

    // MOSTRAR TODOS LOS USUARIOS

    const mappedDate = dates.map(date => {
        const fecha = new Date(date.fechaCita);

        const fechaCita = fecha.toISOString().substring(0,10);

        return (
            <NewDate
                key= {date._id}
                place={date.lugar}
                date={fechaCita}
                ocupados={date.ocupados}
                cupos={date.cupos}
            /> 
        );
    })

    const onClickHandler = () => {
        navigate("/admin/users");
    }


    return (
        <section className={classes["main-section"]}>
            <div className={classes["box-container"]}>
                <h2> BIENVENIDO ....  </h2>
                <h1> Citas programadas </h1>
                <div className={classes["table-section"]}>
                    <div className={classes["table-box"]}>
                        {mappedDate}
                    </div>
                </div>
                <Button className={classes["box-button"]} onClick = {onClickHandler}> Regresar </Button>
            </div>
        </section>
    );
};

// EXPORTAMOS EL COMPONENTE

export default CardContainer;

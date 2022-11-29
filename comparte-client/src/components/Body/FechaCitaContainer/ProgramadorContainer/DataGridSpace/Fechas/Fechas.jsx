import React from "react";
import "./Fechas.scss";
import FechaData from "./FechaData/FechaData";

import {useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useUserContext } from "../../../../../../contexts/UserContext";

const Fechas = ({ sendDates }) => {

    // USUARIO

    const {user} = useUserContext();

    let cita = {};//variable donde se contiene la cita a almacenar

    const onSubmitHandler = (e) =>{
        e.preventDefault();

        const data = new FormData(e.target);
        console.log(data.key);
    }

    return (
    <form className="fechas" onSubmit={onSubmitHandler}>
        {sendDates.map((date) => {
            return (<FechaData key={date._id} dates={date}/>);
        })}
    </form>)
}


export default Fechas
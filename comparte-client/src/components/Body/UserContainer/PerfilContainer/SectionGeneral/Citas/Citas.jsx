import React, {useEffect, useState} from 'react';
import "./Citas.scss";

import axios from "axios";
import { toast } from "react-toastify";

import CitasProg from "./CitasProg/CitasProg";

const Citas = ({dui, name}) => {

    // USE EFFECT

    useEffect(() => {
        fetchUserDates();
      }, []);

    // FETH DE CITAS DEL USUARIO

    const [citas, setCitas] = React.useState([]); // A DONDE ALMACENAR LAS CITAS DE CADA USUARIO

    const fetchUserDates = async () =>
    {
        try{

            const identifier = dui;

            const { data } = await axios.post("/date/getUserDates" , {identifier});

            if(data.citas.length > 0)
            {
                setCitas(data.citas);
            }
            else{
                setCitas([]);
            }

        }
        catch (error) {
            toast.error("Unexpected error!");
        }
    }


    return (
    <div className="citas">
        <h1>Tus citas...</h1>
        <CitasProg name={name} citas={citas}/>
    </div>)
}

export default Citas
import React, { useState, useEffect } from 'react';
import "./DataGridSpace.scss";

import Fechas from "./Fechas/Fechas";
import Buscador from "./Buscador/Buscador";

import axios from 'axios';

import { useConfigContext } from '../../../../../contexts/ConfigContext';

// IMPORT TOASTIFY

import { toast } from 'react-toastify';

const DataGridSpace = ( ) => {

    const [sendDates, setSendDates] = React.useState([]); //variable donde se almacenan las fechas de la cita

    const { startLoading, stopLoading } = useConfigContext();

    useEffect(() => {
        fetchDates();
      }, []);

    // OBTENER TODAS LAS CITAS 

    const fetchDates = async () =>{
        try{
            startLoading();
            const { data } = await axios.get("/date/getDates");
            setSendDates(data.dates);
        } 
        catch (error) {
            toast.error("Unexpected error!");
        } 
        finally {
            stopLoading();
        }
    }

    // BUSCAR CITAS CON FILTRO DE FECHAS 

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        
        const data = new FormData(e.target);

        const inferior = data.get('inferior');
        const superior = data.get('superior');

        fetchDatesLimit(inferior,superior);
    }

    // FETCH A LA BASE, CON LIMITES SUPERIOR E INFERIOR

    const fetchDatesLimit = async (desde, hasta) => {
        try {
          startLoading();
    
          const { data }= await axios.post("/date/findByDates", { desde, hasta} );
          setSendDates(data.dates);
    
        } catch (error) {
          const { status } = error.response || { status: 500 };
          const msg = {
            "404": "Not Found",
            "500": "Something went wrong!"
          }
    
          toast.error(msg[status.toString()] || "Unexpected error!");
        } finally {
          stopLoading();
        }
      }

    return (
    <div className="datagridspace">
        <form onSubmit={onSubmitHandler} className= "form-search">
            <Buscador/>
        </form>
        <Fechas sendDates = {sendDates}/>
    </div>)
}

export default DataGridSpace;
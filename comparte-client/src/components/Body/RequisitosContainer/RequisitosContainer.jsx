import React from "react";
import "./RequisitosContainer.scss";
import SectionBanner from "./SectionBanner/SectionBanner";
import FlechitaB from "./FlechitaB/FlechitaB";
import Requisitos1 from "./Requisitos1/Requisitos1";
import Requisitos2 from "./Requisitos2/Requisitos2";
import BotonEnviar from "./BotonEnviar/BotonEnviar";

import { useUserContext } from "../../../contexts/UserContext";

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const RequisitosContainer = () => {

    const { user } = useUserContext();

    //FUNCIONES DE NAVEGACION
    let history = useNavigate();

    const handleClickFechaCita = () => {//funcion para enviar a la seleccion de la fecha de la cita
        history("/user/select-date");
    }

    const handleClickMain = () => {//funcion para ir a pagina de inicio si no cumple requisitos
        history("/");
    }

    //FUNCION PARA VERIFICAR GÉNERO

    const verifyGender = () => {
        let _genero = user.gender;

        if(_genero === "male"){
            return true;//masculino
        }else{
            return false;//femenino
        }
    }

    let gender = verifyGender();//true=masculino, false=femenino 

    //FUNCION PARA VERIFICAR FECHA
    //EN VERDAD DEBERÍA DE IR EN LA PARTE DONDE SE LLAMA ESTA VISTA 

    //OBTENER DATOS y VERIFICAR Q TODOS LOS CAMPOS ESTAN LLENOS
    const dataMain = {
        re1: null,
        re2: null,
        re3: null,
        re4: null, 
        re5: null,
        re6: null,
        re7: null,
        re8: null,
        re9: null
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        const data = new FormData(e.target);

        if(gender){//VERIFICAR SI ES HOMBRE Q TODOS LOS CAMPOS ESTEN LLENOS
            if(!data.get("no") || !data.get("peso") || !data.get("piercing") ||
            !data.get("fecha") || !data.get("ende") || !data.get("ten")){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingresa todos los datos',
                    footer: '<a href=""></a>'
                })
            }else{
                dataMain.re1 = (data.get("no"));
                dataMain.re2 = (data.get("peso"));
                dataMain.re3 = (data.get("piercing"));
                dataMain.re4 = (data.get("fecha"));
                dataMain.re5 = (data.get("ende"));
                dataMain.re6 = (data.get("ten"));

                //EMPIEZA TESTEO----------------------------------------------------------------------

                verifyReq();//manda a llamar la funcion q verifica los datos
            }
        }else{//VERIFICAR SI ES MUJER, Q TODOS LOS CAMPOS ESTEN LLENOS
            if(!data.get("no") || !data.get("peso") || !data.get("piercing") ||
            !data.get("fecha") || !data.get("ende") || !data.get("ten") || !data.get("embarazo") ||
            !data.get("lac") || !data.get("parto")){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ingresa todos los datos',
                    footer: '<a href=""></a>'
                })
            }else{
                dataMain.re1 = (data.get("no"));
                dataMain.re2 = (data.get("peso"));
                dataMain.re3 = (data.get("piercing"));
                dataMain.re4 = (data.get("fecha"));
                dataMain.re5 = (data.get("ende"));
                dataMain.re6 = (data.get("ten"));

                //SI ENTRO AL ELSE, ES POR Q ES MUJER Y HAY Q ALMACENAR LOS CAMPOS
                dataMain.re7 = (data.get("embarazo"));
                dataMain.re8 = (data.get("lac"));
                dataMain.re9 = (data.get("parto"));

                //EMPIEZA TESTEO----------------------------------------------------------------------

                verifyReq();//manda a llamar la funcion q verifica los datos
            }
        }
    }

    //VERIFICACION DE REQUISITOS--------------------------------------------------------------------------

    const verifyReq = () =>{
        let _ver = true;//true se cumplen, false no se cumplen

        if(gender){//si es hombre
            if(dataMain.re1 === "no" && dataMain.re2 >= 50 && dataMain.re5 === "no" && dataMain.re6 === "no"){
                if(dataMain.re3 === "si"){
                    if(dataMain.re4 >= 6){
                        _ver = true;
                    }else{
                        _ver = false;
                    }
                }else{
                    _ver = true;
                }
            }else{
                _ver = false;
            }
        }else{//si es mujer
            if(dataMain.re1 === "no" && dataMain.re2 >= 50 && dataMain.re5 === "no" && dataMain.re6 === "no" && 
            dataMain.re7 === "no" && dataMain.re8 === "no" && dataMain.re9 === "7"){
                if(dataMain.re3 === "si"){
                    if(dataMain.re4 >= 6){
                        _ver = true;
                    }else{
                        _ver = false;
                    }
                }else{
                    _ver = true;
                }
            }else{
                _ver = false;
            }
        }

        //enviar la funcion del click dependiendo si son validos o no
        //enrutar segun si cumple o no los requisitos

        if(_ver){
            Swal.fire({
                title: 'Felicidades, cumples los requisitos!',
                text: "Ahora escoge el día para realizar la donación...",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Entiendo'
              }).then((result) => {
                if (result.isConfirmed) {
                    handleClickFechaCita();
                }
              })
        }else{
            Swal.fire({
                title: 'Ups...',
                text: "No cumples los requisitos necesarios",
                icon: 'warning',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Entiendo'
              }).then((result) => {
                if (result.isConfirmed) {
                  handleClickMain();
                }
              })
        }
    }

    return (
    <div className="requisitoscontainer">
        <SectionBanner/>
        <FlechitaB/>
        <form onSubmit={handleSubmit}>
            <Requisitos1/>
            <hr />
            {!gender && <Requisitos2/>}{/**SOLO SE MUESTRA SI ES FEMENINO */}
            <BotonEnviar type="submit"/>
        </form>
        
    </div>)
}

export default RequisitosContainer
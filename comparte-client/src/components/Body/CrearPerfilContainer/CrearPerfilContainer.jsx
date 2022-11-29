import React from "react";
import "./CrearPerfilContainer.scss";
import BannerCrearPerf from "./BannerCrearPerf/BannerCrearPerf";
import FlechitaC from "./FlechitaC/FlechitaC";
import SectionCrearPerfil from "./SectionCrearPerfil/SectionCrearPerfil";
import BotonCrearP from "./BotonCrearP/BotonCrearP";

import {useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useUserContext } from "../../../contexts/UserContext";

const CrearPerfilContainer = () => {

    const { user, register } = useUserContext();

    //FUNCIONES DE NAVEGACION
    let history = useNavigate();

    const handleClickMain = () => {//funcion para enviar al inicio al cancelar
        history("/");
    }

    const CrearPerfil = (dataPerfil) =>{//recibe el json con la info del usuario
        //MENSAJES PARA EL CASO DE EXITO Y FALLO
        if(register(dataPerfil)){//si todo sale bien
            Swal.fire({
                title: '¡Felicidades, tu perfil ha sido creado con éxito!',
                text: "Ya puedes iniciar sesión normalmente...",
                icon: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Entiendo'
            }).then((result) => {
                if (result.isConfirmed) {
                    handleClickMain();
                }
            })
        }else{//si no se pudo insertar por algun error
            Swal.fire({
                title: 'Ha ocurrido un error en la creación del perfil',
                text: "Intentalo mas tarde...",
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Entiendo'
            }).then((result) => {
                if (result.isConfirmed) {
                    handleClickMain();
                }
            })
        }
    }

    //------------------------FUNCION DE VALIDACION DE DATOS------------------------------
    {/** const validacion = async (perfil) =>{
        let valido = true;
        console.log(perfil.dui.length);
        console.log(parseInt(perfil.dui[1], 10))

        console.log("antes del if")
        if((perfil.dui).length != 10){
            console.log("entro al if")
            Swal.fire({
                title: 'DUI no válido',
                text: "Verifique su numero de dui",
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Entiendo'
            }).then((result) => {
                if (result.isConfirmed) {
                    return valido = false;
                }
            })
            console.log("despues de retornar la mierda esta")
        }else{
            console.log("entro al else")
            let valdui = false;
            for(let i=0; i < 10; i++){
                console.log(perfil.dui[i]);
                if(i === 9 && perfil.dui[i] != "-"){
                    valdui = false;
                }
                else if(i != 9 && parseInt(perfil.dui[i], 10) === NaN){
                    console.log("si se verifico")
                    valdui = false;
                }
            }
            if(!valdui){
                return valido = false;
            }else{
                return valido = true;
            }
            
        }
        console.log("despues del if")
    } */}
    

    //VARIABLE Q ALMACENARA LOS DATOS A GUARDAR---------------------------------------------------------------
    let dataPerfil = {
        dui: null,
        username: null,
        email: null,
        password: null,
        bloodType: null,
        gender: null,
        dateBirth: null,
        phone: null,
        emergencyName: null,
        emergencyPhone: null,
        puntaje: 0,
                    //GREGAR EL INPUT DEL NOMBRE DEL USUARIO
    };

    //funcion del submit--------------------------
    const handleSubmit = (e) => {
        e.preventDefault();


        const data = new FormData(e.target);

        //insertar datos obtenidos en e, a la variable dataPerfil
        //verificar si todos los campos estan llenos
        if(!data.get("email") || !data.get("dui") || !data.get("Tipo-Sangre") || !data.get("nacimiento") ||
        !data.get("genero") || !data.get("tel") || !data.get("nameE") || !data.get("telE") || !data.get("password") || 
        !data.get("passwordv") || !data.get("name")){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa todos los datos',
                footer: '<a href=""></a>'
            })
        }else{
            if(data.get("password").lenght < 8 || data.get("passwordv").lenght < 8){
                Swal.fire({
                    icon: 'error',
                    title: 'Oh no...',
                    text: 'La contraseña debe tener al menos 8 carácteres...',
                    footer: '<a href=""></a>'
                })
            }else{
                if(data.get("password") === data.get("passwordv")){//si la contraseña pasa la validacion--------
                    dataPerfil.email = (data.get("email"));
                    dataPerfil.dui = (data.get("dui"));
                    dataPerfil.bloodType = (data.get("Tipo-Sangre"));
                    dataPerfil.dateBirth = (data.get("nacimiento"));//lo guarda como yyyy-mm-dd
                    dataPerfil.gender = (data.get("genero"));
                    dataPerfil.phone = (data.get("tel"));
                    dataPerfil.emergencyName = (data.get("nameE"));
                    dataPerfil.emergencyPhone = (data.get("telE"));
                    dataPerfil.password = (data.get("password"));
                    dataPerfil.username = (data.get("name"));

                    //CREAR FUNCION Q VERIFIQUE LOS DATOS ANTES DE LLAMAR A LA FUNCION DE INSERCION----------------------------------
                    
                    CrearPerfil(dataPerfil);//llama la funcion q crea el perfil

                    

                }else{//no ha puesto la misma contraseña en ambos campos
                    Swal.fire({
                        icon: 'error',
                        title: 'Oh no...',
                        text: 'Corrobore los campos de contraseña, hay discrepacia de datos...',
                        footer: '<a href=""></a>'
                    })
                }
            }
        }
    }

    return (
    <div className="crearperfilcontainer">
        <BannerCrearPerf/>
        <FlechitaC/>
        <form onSubmit={handleSubmit}>
            <SectionCrearPerfil/>
            <BotonCrearP type={"submit"} onClickC={handleClickMain}/>
        </form>
    </div>)
}

export default CrearPerfilContainer
import React from "react";

import "../HomeView/HomeView.module.scss";
 
import BotonDonar from "./BotonDonar/BotonDonar";

import classes from './HomeView.module.scss'

import {useNavigate } from 'react-router-dom';

import { useUserContext } from "../../contexts/UserContext";

import Swal from 'sweetalert2';

const HomeView = () => {

    const { user } = useUserContext();

    //FUNCIONES DE NAVEGACION
    let history = useNavigate();

    const handleClickDonar = () => {
            if(user){
            history("/user/requisitos");

            }else{
                history("/auth/signin");
        }
    }

    return (
        <div className= { classes ["vistamaincontainer"]}>
            <section className= { classes ["bannermain"]}>
                <div className={ classes ["contenedor"]}>
                    <div className={ classes ["txtcon"]}>
                        <h3>Bienvenidos</h3>
                        <h1>Haz tu donación</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Sapiente porro atque dolorum nostrum quo molestias praesentium, consequatur minus totam eos.
                        </p>
                        <BotonDonar onClick={handleClickDonar} text= "Donar"/>
                    </div>
                    <div className= { classes ["imgcon"]}>
                        <figure><img src="../src/assets/img/bannermain.png" alt="banner" /></figure>
                    </div>
                </div>
            </section>
            <section className={ classes ["graficas"]}>
                <div className={ classes ["contenedor2"]}>
                    <h1>Donaciones de sangre</h1>
                    <p>
                        La donación de sangre entera es el tipo más común de donación de sangre. Durante esta donación, 
                        donas aproximadamente una pinta (más o menos medio litro)
                        de sangre entera. Luego, la sangre se separa en sus componentes: glóbulos rojos, plasma y, a veces, plaquetas.
                    </p>
                    <div className={ classes ["graficasimg"]}>
                        <figure><img src="../src/assets/img/grafico1.png" alt="grafica" /></figure>
                        <figure><img src="../src/assets/img/grafico2.png" alt="grafica" /></figure>
                        <figure><img src="../src/assets/img/grafico3.png" alt="grafica" /></figure>
                    </div>
                </div>
            </section>
            <section className={ classes ["compartiendovidas"]}>
                <div className={ classes ["contenedor3"]}>
                    <figure><img src="../src/assets/img/perfil.png" alt="img" /></figure>
                    <div className={ classes ["texto1"]}>
                        <h3>BIENVENIDOS</h3>
                        <h1>Compartiendo vidas</h1>
                        <p>
                            La donación de sangre entera es el tipo más común de donación de sangre. Durante esta donación, 
                            donas aproximadamente una pinta (más o menos medio litro) de sangre entera. 
                            Luego, la sangre se separa en sus componentes: glóbulos rojos, plasma y, a veces, plaquetas.
                        </p>
                    </div>
                </div>
            </section>
            <section className={ classes ["nuestroequipo"]}>
                <div className={ classes ["contenedor4"]}>
                    <h2>EQUIPO</h2>
                    <h1>Nuestro equipo</h1>
                    <p>"El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos."
                    <strong>  Michael Jordan.</strong></p>
                    <div className={ classes ["tarjetascontainer"]}>
                        <div className={ classes ["tarjeta"]}>
                            <figure><img src="../src/assets/img/Claudia.png" alt="" /></figure>
                            <div className={ classes ["info"]}>
                                <h2>Claudia Chávez</h2>
                                <p>Ing. Informatica</p>
                            </div>
                        </div>
                        <div className={ classes ["tarjeta"]}>
                            <figure><img src="../src/assets/img/Fernando.png" alt="" /></figure>
                            <div className={ classes ["info"]}>
                                <h2>Fernando Figueroa</h2>
                                <p>Ing. Informatica</p>
                            </div>
                        </div>
                        <div className={ classes ["tarjeta"]}>
                            <figure><img src="../src/assets/img/Diego.png" alt="" /></figure>
                            <div className={ classes ["info"]}>
                                <h2>Diego Viana</h2>
                                <p>Ing. Informatica</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>)
}


export default HomeView;
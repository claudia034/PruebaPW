
// IMPORTAMOS LA LIBRERIA 

import { useEffect, useState } from "react";

import { toast } from 'react-toastify';

// IMPORTAR EL MODULO CSS

import classes from './LogInContainer.module.scss';

// IMPORTAMOS LOS ICONOS

import MainIMG from '../../../assets/images/MainImg.png';

// IMPORTAMOS LAS DEPENDECIAS

import DivLoginInput from './DivLoginInput/DivLoginInput';

import {useNavigate } from 'react-router-dom';

// IMPORTAMOS EL USER CONTEXT

import { useUserContext } from "../../../contexts/UserContext";

// IMPORT GAPI

import {GoogleLogin} from 'react-google-login';

import { gapi,loadGapiInsideDOM } from 'gapi-script';


// CREAMOS EL COMPONENTE 

const LogInContainer = ({ onLogin = () => { } }) => {

    const {loginGoogle} = useUserContext();

    const clientId = "329918589866-2e1coep0mi4o72ka5fdh0rem31uh29qh.apps.googleusercontent.com";

    // GOOGLE AUTH----------------------------------------------

    useEffect(() => { const clientId = "329918589866-2e1coep0mi4o72ka5fdh0rem31uh29qh.apps.googleusercontent.com"; function start() { gapi.client.init({ clientId: clientId, scope: "", ux_mode: 'redirect' }); } gapi.load("client:auth2", start); });

    const onLoginHandlerGoogle = async (response) => {
        //Ejecutar el servicio de login <- User context
        console.log(response.profileObj.email);
        await loginGoogle(response.profileObj.email);
    }

    const onSuccesManual = (response) => {
        onLogin(response.dui, response.password);
    }

    const onFailure = (response) => {
        console.log(response);
        console.log("Something went wrong");
    }

    return (
        <section className={classes["main-section"]}>

            <div className={classes["main-container"]}>

                <div className={classes["login-main-container"]}>

                    <div className={classes["login-container"]}>

                        <div className={classes["text-box"]}>
                            <h2> Hey !  </h2>
                            <h1> Welcome Back...</h1>
                        </div>

                        <div className={classes["login-box"]}>

                            <DivLoginInput onLoginDo = {onSuccesManual}/>

                            <p> o...
                            <GoogleLogin
                                    clientId={clientId}
                                    onSuccess={onLoginHandlerGoogle}
                                    onFailure={onFailure}
                                    isSignedIn={true}
                                />
                            </p>
                        </div>

                    </div>

                </div>

                <div className={classes["img-container"]}>

                    <figure>

                        <img src={MainIMG} alt="Main img"></img>

                    </figure>

                </div>

            </div>

        </section>
    );
};

// EXPORTAMOS EL COMPONENTE

export default LogInContainer;

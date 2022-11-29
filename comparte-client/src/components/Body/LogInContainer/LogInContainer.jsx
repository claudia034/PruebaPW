
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

import GoogleLogin from 'react-google-login';

import { gapi } from 'gapi-script';


// CREAMOS EL COMPONENTE 

const LogInContainer = ({ onLogin = () => { } }) => {

    const {setUser} = useUserContext();

    // GOOGLE AUTH----------------------------------------------

    const clientID = "329918589866-gkonr7r35d6n73ipjser4joe2u2f85kh.apps.googleusercontent.com";

    useEffect(() => {
        const start = () => {
            gapi.auth2.init({
                clientId: clientID,

            })
        }

        gapi.load("client:auth2", start);

    }, [])

    const onSuccess = (response) => {
        setUser(response.profileObj);
    }

    const onSuccesManual = (response) => {
        onLogin(response.dui, response.password);
    }

    const onFailure = () => {
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
                                    clientId={clientID}
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={"single_host_policy"}
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

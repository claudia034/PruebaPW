
// IMPORTAMOS LA LIBRERIA 

import React, { useState } from "react";

import { useEffect } from "react";

import { Await, useNavigate } from "react-router";

import { toast } from "react-toastify";

import axios from "axios";

// IMPORTAR EL MODULO CSS

import classes from './PointsContainer.module.scss';

// IMPORTAMOS LOS ICONOS

import search from '../../../assets/images/search-icon.png';

// IMPORTAMOS LAS DEPENDECIAS

import Button from '@mui/material/Button';

import NewUser from "./newUser/NewUser";

// CREAMOS EL COMPONENTE 

const PointsContainer = () => {
    
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetchUsersInfo();
    }, []);

    const navigate = useNavigate();

    // OBTENER TODOS LOS USUARIOS

    const fetchUsersInfo = async () => {
        try {
            const { data } = await axios.get("/auth/getAllUsers");
            setUsers(data.users);

        } catch (error) {
            const { status } = error.response || { status: 500 };
            const msgs = {
                "404": "User not found",
                "401": "Unauthorized",
                "500": "Unexpected error"
            };
            toast.error(msgs[String(status)]);
        } finally {
        }
    }

    // MOSTRAR TODOS LOS USUARIOS

    const mappedUser = users.map(user => {
        return (
            <NewUser
                key={user._id}
                username={user.username}
                puntaje={user.puntaje}
                gender={user.gender}
            />
        );
    })

    // BUSCAR UN USUARIO

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        
        const data = new FormData(e.target);

        const username = data.get('username');

        if(username.length > 0)
            fetchUser(username);
        else
            fetchUsersInfo();
    }

    // FETCH A LA BASE EN BASE A USUARIO

    const fetchUser = async (username) => {
        try {
    
          const { data }= await axios.post("/auth/findByUsername", { username } );
          setUsers(data.user);
    
        } catch (error) {
          const { status } = error.response || { status: 500 };
          const msg = {
            "404": "No se encontro ningun usuario con ese nombre",
            "500": "Something went wrong!"
          }
    
          toast.error(msg[status.toString()] || "Unexpected error!");
        }
    }

    // REGRESAR AL HOME DE ADMIN

    const onClickHandler = () => {
        navigate("/admin/cards");
    }

    return (
        <section className={classes["main-section"]}>
            <div className={classes["box-container"]}>
                <h2> BIENVENIDO AL  </h2>
                <h1> Registro de puntaje</h1>
                <div className={classes["search-box"]}>
                    <form onSubmit={onSubmitHandler}>
                            <input name="username" type=" text " placeholder=" Buscar usuario..."></input>
                            <Button className={classes["search-button"]} type ="submit">
                                <figure>
                                    <img src={search} alt="Search logo"></img>
                                </figure>
                            </Button>
                    </form>
                </div>
                <div className={classes["table-section"]}>
                    <div className={classes["table-box"]}>
                        {mappedUser}
                    </div>
                </div>
                <Button className={classes["box-button"]} onClick={onClickHandler}> Regresar </Button>
            </div>
        </section>
    );
};

// EXPORTAMOS EL COMPONENTE

export default PointsContainer;

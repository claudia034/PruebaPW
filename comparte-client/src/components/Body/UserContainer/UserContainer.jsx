
// IMPORTAMOS LA LIBRERIA 

import React, { useState } from "react";

import { useEffect } from "react";
// IMPORTAR EL MODULO CSS

import classes from './UserContainer.module.scss';

import axios from "axios";

import { toast } from "react-toastify";

import { useNavigate } from "react-router";

import { useConfigContext } from "../../../contexts/ConfigContext";

import { MdArrowForward } from "react-icons/md";

// IMPORTAMOS LOS ICONOS

import search from '../../../assets/images/search-icon.png';

import NewUser from "./newUser/NewUser";

// IMPORTAMOS LAS DEPENDECIAS

import Button from '@mui/material/Button';

// CREAMOS EL COMPONENTE 

const CardContainer = () => {

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
                bloodtype={user.bloodType}
                phone={user.phone}
                gender={user.gender}
                user={user}
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

    // IR AL VIEW DE CITAS

    const onDateHandler = () => {;
        navigate("/admin/dates");
    }

    return (
        <section className={classes["main-section"]}>
            <div className={classes["box-container"]}>
                <h2> BIENVENIDO AL  </h2>
                <h1> Registro de usuarios</h1>
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
                <div className={classes["button-section"]}>
                    <Button className={classes["box-button"]} onClick={onClickHandler} > Regresar </Button>
                    <Button className={classes["box-button"]} onClick={onDateHandler} > Citas <MdArrowForward/> </Button>
                </div>
            </div>
        </section>
    );
};

// EXPORTAMOS EL COMPONENTE

export default CardContainer;

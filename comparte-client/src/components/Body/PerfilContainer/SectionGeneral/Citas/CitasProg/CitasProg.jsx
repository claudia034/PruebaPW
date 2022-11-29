import React from "react";
import "./CitasProg.scss";
import DataUser from "./DataUser/DataUser";

const CitasProg = ({name, citas}) => {

    
    return (
    <div className="citasprog">
        {citas.map((cita) => {
            return (<DataUser key={cita._id} name={name} cita={cita}/>);
        })}    
    </div>)
}

export default CitasProg
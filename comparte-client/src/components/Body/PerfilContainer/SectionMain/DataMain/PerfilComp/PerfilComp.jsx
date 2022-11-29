import React from "react";
import "./PerfilComp.scss";
import Nombre from "./Nombre/Nombre"
import Dui from "./Dui/Dui"
import TipoSangre from "./TipoSangre/TipoSangre"
import Genero from "./Genero/Genero"

import { useUserContext } from "../../../../../../contexts/UserContext";

const PerfilComp = () => {

    const { user } = useUserContext();

    return (
    <div className="perfilcomp">
        <Nombre name={user.username}/>
        <Dui dui={user.dui}/>
        <TipoSangre sangre={user.bloodType}/>
        <Genero gen={user.gender}/>
    </div>)
}

export default PerfilComp
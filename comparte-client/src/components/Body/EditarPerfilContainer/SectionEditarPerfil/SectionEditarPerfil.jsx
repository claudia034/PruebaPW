import React from "react";
import "./SectionEditarPerfil.scss";
import CamposContainer from "./CamposContainer/CamposContainer";

const SectionEditarPerfil = () => {
    return (
    <div className="sectioneditarperfil">
        <h1>Información general</h1>
        <p>
            Para poder realizar donaciones de sangre es necesario que crees tu 
            perfil, y que este se encuentre actualizado, a continuacion se te presentan 
            los espacios disponibles para que actualices los campos pertinentes.
        </p>
        <CamposContainer/>
    </div>)
}

export default SectionEditarPerfil
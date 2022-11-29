import React from "react";
import "./SectionCrearPerfil.scss";
import CamposContainer from "./CamposContainer/CamposContainer";

const SectionCrearPerfil = () => {
    return (
    <div className="sectioncrearperfil">
        <h1>Información general</h1>
        <p>
            Para poder realizar donaciones de sangre es necesario que crees tu 
            perfil, a continuación se te presentan diversos campos que necesitamos 
            para la creación de tu perfil de donante.
        </p>
        <CamposContainer/>
    </div>)
}

export default SectionCrearPerfil
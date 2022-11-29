import React from "react";
import "./FechaCitaContainer.scss";
import SectionBannerCita from "./SectionBannerCita/SectionBannerCita";
import ProgramadorContainer from "./ProgramadorContainer/ProgramadorContainer";
import FlechitaC from "./FlechitaC/FlechitaC";

const FechaCitaContainer = () => {
    return (
    <div className="fechacitacontainer">
        <SectionBannerCita/>
        <FlechitaC/>
        <ProgramadorContainer/>
    </div>)
}

export default FechaCitaContainer
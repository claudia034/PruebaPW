import React from "react";
import "./Requisitos1.scss";
import Requisitos1Container from "./Requisitos1Container/Requisitos1Container";

const Requisitos1 = () => {
    return (
    <div className="requisitos1">
        <h1>Requisitos</h1>
        <p>Toma en cuenta que solo puedes realizar donaciones de sangre cada tres meses, dicho período se evaluara
            automáticamente desde tu última donación realizada.
        </p>
        <Requisitos1Container/>
    </div>)
}

export default Requisitos1
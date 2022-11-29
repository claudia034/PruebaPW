import React from "react";
import "./Anio.scss";

const Anio = () => {
    return (
    <div className="anio">
        <input type="number" name="anio" id="anio" step="1" min="2022" max="2050" placeholder="Año" />
    </div>)
}

export default Anio
import React from "react";
import "../Anio/Anio.scss";

const Anio = () => {
    return (
    <div className="anio">
        <input type="number" name="anio-max" id="anio" step="1" min="2022" max="2050" placeholder="Año" />
    </div>)
}

export default Anio
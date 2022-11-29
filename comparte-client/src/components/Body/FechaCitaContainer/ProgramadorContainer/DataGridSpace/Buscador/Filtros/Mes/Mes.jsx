import React from "react";
import "./Mes.scss";

const Mes = () => {
    return (
    <div className="mes">
        <input type="number" name="mes" id="mes" step="1" min="1" max="12" placeholder="Mes" />
    </div>)
}

export default Mes
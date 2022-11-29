import React from "react";
import "../Mes/Mes.scss";

const Mes_max = () => {
    return (
    <div className="mes">
        <input type="number" name="mes-max" id="mes" step="1" min="1" max="12" placeholder="Mes" />
    </div>)
}

export default Mes_max
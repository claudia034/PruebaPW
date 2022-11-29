import React from "react";
import "./Rem3.scss";

import ReactTooltip from 'react-tooltip';

const Rem3 = () => {
    return (
    <div className="rem3">
        <div className="req">
            <div className="info" data-tip data-for="infor3">?</div>

            <ReactTooltip id="infor3" place="top" type="info" effect="solid" padding="1.5vh">
                Si han pasado 6 meses, seleccionar la opción "más de 6 meses".
            </ReactTooltip>

            <div className="question">
                <p>Tiempo desde ultimo parto</p>
            </div>
        </div>
        <div className="entry">
            <label htmlFor="1"><input type="radio" name="parto" id="1" value="7"/>Mas de 6 meses</label>

            <label htmlFor="0"><input type="radio" name="parto" id="0" value="5"/>Menos de 6 meses</label>
        </div>
    </div>)
}

export default Rem3
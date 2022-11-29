import React from "react";
import "./Re6.scss";

import ReactTooltip from 'react-tooltip';


const Re6 = () => {
    return (
    <div className="re6">
        <div className="req">
            <div className="info" data-tip data-for="info1">?</div>

            <ReactTooltip id="info6" place="top" type="info" effect="solid" padding="1.5vh">
                Algunos sintomas pueden ser mareos, desmayos y confusión.
            </ReactTooltip>

            <div className="question">
                <p>¿Ha presentado indicios de niveles altos o bajos de presión arterial en los últimos 5 días?</p>
            </div>
        </div>
        <div className="entry">
            <label htmlFor="1"><input type="radio" name="ten" id="1" value="si"/>Si.</label>

            <label htmlFor="0"><input type="radio" name="ten" id="0" value="no"/>No.</label>
        </div>
    </div>)
}


export default Re6
import React from "react";
import "./Re1.scss";

import ReactTooltip from 'react-tooltip';

const Re1 = () => {

    return (
    <div className="re1">
        <div className="req">
            <div className="info" data-tip data-for="info1">?</div>

            <ReactTooltip id="info1" place="top" type="info" effect="solid" padding="1.5vh">
                Temperatura igual o mayor a 38°.
            </ReactTooltip>

            <div className="question">
                <p>¿Ha presentado fiebre en los últimos 7 días?</p>
            </div>
        </div>
        <div className="entry">
            <label htmlFor="1"><input type="radio" name="no" id="1" value="si"/>Si.</label>

            <label htmlFor="0"><input type="radio" name="no" id="0" value="no"/>No.</label>
        </div>
    </div>)
}


export default Re1
import React from "react";
import "./Rem1.scss";

import ReactTooltip from 'react-tooltip';

const Rem1 = () => {
    return (
    <div className="rem1">
        <div className="req">
            <div className="info" data-tip data-for="infor1">?</div>

            <ReactTooltip id="infor1" place="top" type="info" effect="solid" padding="1.5vh">
                Nauseas, vómitos, antojos, sensibilidad en las mamas o pezones, dolores de cabeza, etc.
            </ReactTooltip>

            <div className="question">
                <p>¿Presenta indicios de embarazo?</p>
            </div>
        </div>
        <div className="entry">
            <label htmlFor="1"><input type="radio" name="embarazo" id="1" value="si"/>Si.</label>

            <label htmlFor="0"><input type="radio" name="embarazo" id="0" value="no"/>No.</label>
        </div>
    </div>)
}

export default Rem1
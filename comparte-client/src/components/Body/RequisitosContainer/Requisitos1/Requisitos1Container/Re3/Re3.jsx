import React from "react";
import "./Re3.scss";

import ReactTooltip from 'react-tooltip';


const Re3 = ({onChange}) => {
    return (
    <div className="re3">
        <div className="req">
            <div className="info" data-tip data-for="info3">?</div>

            <ReactTooltip id="info3" place="top" type="info" effect="solid" padding="1.5vh">
                Mínimo de 30kg y un máximo de 150kg.
            </ReactTooltip>

            <div className="question">
                <p>¿Tiene tatuajes o piercings?</p>
            </div>
        </div>
        <div className="entry" onChange={onChange}>
            <label htmlFor="1"><input type="radio" name="piercing" id="1" value="si"/>Si.</label>

            <label htmlFor="0"><input type="radio" name="piercing" id="0" value="no"/>No.</label>
        </div>
    </div>)
}


export default Re3
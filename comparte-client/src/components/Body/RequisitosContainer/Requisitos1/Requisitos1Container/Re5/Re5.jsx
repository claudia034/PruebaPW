import React from "react";
import "./Re5.scss";

import ReactTooltip from 'react-tooltip';


const Re5 = () => {
    return (
    <div className="re5">
        <div className="req">
            <div className="info" data-tip data-for="info5">?</div>

            <ReactTooltip id="info5" place="top" type="info" effect="solid" padding="1.5vh">
                Una zona endémica es una zona donde ha habido un brote de virus o múltiples casos de contagios.
            </ReactTooltip>

            <div className="question">
                <p>¿Ha visitado zonas endémicas?</p>
            </div>
        </div>
        <div className="entry">
            <label htmlFor="1"><input type="radio" name="ende" id="1" value="si"/>Si.</label>

            <label htmlFor="0"><input type="radio" name="ende" id="0" value="no"/>No.</label>
        </div>
    </div>)
}


export default Re5
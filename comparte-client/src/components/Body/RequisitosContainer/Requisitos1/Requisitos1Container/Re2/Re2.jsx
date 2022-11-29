import React from "react";
import "./Re2.scss";

import ReactTooltip from 'react-tooltip';


const Re2 = () => {
    return (
    <div className="re2">
        <div className="req">
            <div className="info" data-tip data-for="info2">?</div>

            <ReactTooltip id="info2" place="top" type="info" effect="solid" padding="1.5vh">
                Mínimo de 30kg y un máximo de 150kg.
            </ReactTooltip>

            <div className="question">
                <p>Ingrese su peso</p>
            </div>
        </div>
        <div className="entry">
            {/** tiene q ser un scroll */}
            <input type="number" name="peso" id="peso" step="1" min="30" max="150" placeholder="30" defaultValue="30"/>
            <p>Kg</p>
        </div>
    </div>)
}


export default Re2
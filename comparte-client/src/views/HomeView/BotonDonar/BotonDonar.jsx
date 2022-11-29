import React from "react";

import "../../../components/Body/RequisitosContainer/BotonEnviar/BotonEnviar.scss";

const  BotonDonar = ({onClick, text }) => {

    return (
        <div className="botonenviar">
            <button onClick={onClick}> {text} </button>
        </div>)
}

export default BotonDonar
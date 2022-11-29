import React, { useState, useEffect } from 'react';
import "./ProgramadorContainer.scss";
import DataGridSpace from "./DataGridSpace/DataGridSpace";

// IMPORTAMOS AXIOS

import axios from "axios";

// IMPORTAMOS EL LOADING 

import { useConfigContext } from "../../../../contexts/ConfigContext";

const ProgramadorContainer = () => {

    return (
    <div className="programadorcontainer">
        <DataGridSpace/>
    </div>)
}

export default ProgramadorContainer
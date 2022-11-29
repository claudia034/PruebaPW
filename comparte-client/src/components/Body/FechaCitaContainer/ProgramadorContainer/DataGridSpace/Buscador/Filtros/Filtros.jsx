
import "./Filtros.scss";

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Filtros = () => {

    const [startDate, setStartDate] = useState(new Date("01/12/2022"));
    const [endDate, setEndDate] = useState(new Date("03/12/2022"));

    return (
        <div className="filtros">
            <DatePicker 
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                dateFormat= "yyyy-MM-dd"
                endDate={endDate}
                className = "custom-input"
                name="inferior"
            />
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                dateFormat= "yyyy-MM-dd"
                minDate={startDate}
                className="custom-input"
                name="superior"
            />
        </div>
    );
}

export default Filtros
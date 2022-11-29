import React, { useState, useEffect } from "react";
import "./Requisitos1Container.scss";
import Re1 from "./Re1/Re1";
import Re2 from "./Re2/Re2";
import Re3 from "./Re3/Re3";
import Re4 from "./Re4/Re4";
import Re5 from "./Re5/Re5";
import Re6 from "./Re6/Re6";

//
const Requisitos1Container = () => {
    let readOnly = true;

    const [read, setRead] = useState(true);

    const handleChange = ((e) => {
        const x = e.target.value;

        if(x === "si"){
            readOnly = false;
            setRead(readOnly);
        }else{
            readOnly = true;
            setRead(readOnly);
        }
    })

    return (
    <div className="requisitos1container" id="requisitos-general">
        <Re1/>
        <Re2/>
        <Re3 onChange={handleChange}/>
        <Re4 readOnly={read}/>
        <Re5/>
        <Re6/>
    </div>)
}

export default Requisitos1Container
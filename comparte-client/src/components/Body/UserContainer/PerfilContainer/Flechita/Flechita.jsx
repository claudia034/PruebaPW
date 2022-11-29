import React from "react";
import "./Flechita.scss";

import { MdExpandMore } from "react-icons/md";

//<img src={MdExpandMore} alt="arrow" />
const Flechita = () => {
    return (
    <div className="flechita">
         <figure><MdExpandMore/></figure>
    </div>)
}

export default Flechita
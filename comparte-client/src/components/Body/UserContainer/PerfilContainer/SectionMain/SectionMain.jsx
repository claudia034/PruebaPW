import React from "react";
import "./SectionMain.scss";
import Image from "./Image/Image"
import DataMain from "./DataMain/DataMain";

const SectionMain = ({user}) => {
    return (
    <div className="sectionmain">
        <Image/>
        <DataMain user={user}/>
    </div>)
}

export default SectionMain
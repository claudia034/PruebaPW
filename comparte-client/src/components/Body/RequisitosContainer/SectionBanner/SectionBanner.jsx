import React from "react";
import "./SectionBanner.scss";
import TextoBanner from "./TextoBanner/TextoBanner";
import ImageBanner from "./ImageBanner/ImageBanner";

const SectionBanner = () => {
    return (
    <div className="sectionbanner">
        <TextoBanner/>
        <ImageBanner/>
    </div>)
}

export default SectionBanner
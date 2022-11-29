import React from "react";
import "./SectionBannerCita.scss";
import TextoBannerCita from "./TextoBannerCita/TextoBannerCita";
import ImageBannerCita from "./ImageBannerCita/ImageBannerCita";

const SectionBannerCita = () => {
    return (
    <div className="sectionbannercita">
        <TextoBannerCita/>
        <ImageBannerCita/>
    </div>)
}

export default SectionBannerCita
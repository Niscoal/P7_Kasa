import React from "react";
import bannerBgFilter from "../assets/banner_bgFilter.png";

const Banner = ({ bannerImg }) => {
    return (
        <div>
            <img src={bannerImg} alt="banner : forest and sea"></img>
            <img src={bannerBgFilter} alt="Background filter"></img>
        </div>
    );
};

export default Banner;

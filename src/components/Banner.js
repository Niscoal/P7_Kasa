import React from "react";
import bannerBgFilter from "../assets/banner_bgFilter.png";

const Banner = (props) => {
    return (
        <div>
            <img src={props.bannerImg} alt={props.alt}></img>
            <img src={bannerBgFilter} alt="Background filter"></img>
        </div>
    );
};

export default Banner;

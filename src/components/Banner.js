import React from "react";

const Banner = (props) => {
    return (
        <div className="banner">
            <img
                src={props.bannerImg}
                alt={props.alt}
                className="bannerImg"
            ></img>
            <div className="bannerFilter" />
            <div className="bannerText">
                <span> {props.text0}</span>
                <span> {props.text1}</span>
            </div>
        </div>
    );
};

export default Banner;

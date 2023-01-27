import React, { useState } from "react";
import nextArrow from "../assets/nextArrow.png";
import previousArrow from "../assets/previousArrow.png";

const Carousel = ({ props }) => {
    const [displayPicture, setPicture] = useState(0);
    const length = props.length;

    const nextSlide = () => {
        if (displayPicture === length - 1) {
            setPicture(0);
        } else {
            setPicture(displayPicture + 1);
        }
    };

    const previousSlide = () => {
        if (displayPicture === 0) {
            setPicture(length - 1);
        } else {
            setPicture(displayPicture - 1);
        }
    };

    return (
        <div>
            {props.map((picture, index) => {
                return (
                    <div key={index}>
                        {index === displayPicture && (
                            <img src={picture} alt="" />
                        )}
                        {console.log(index)}
                    </div>
                );
            })}
            {length > 1 ? (
                <>
                    <div onClick={nextSlide}>
                        <img src={nextArrow}></img>
                    </div>
                    <div onClick={previousSlide}>
                        <img src={previousArrow}></img>
                    </div>
                    <div>
                        {displayPicture + 1}/{length}
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default Carousel;

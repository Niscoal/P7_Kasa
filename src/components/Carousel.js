import React, { useState } from "react";
import nextArrow from "../assets/nextArrow.png";
import previousArrow from "../assets/previousArrow.png";

const Carousel = (props) => {
    const [displayPicture, setPicture] = useState(0);
    const length = props.slide.length;

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
        <div className="carousel">
            {props.slide.map((picture, index) => {
                return (
                    <div key={index}>
                        {index === displayPicture && (
                            <img
                                src={picture}
                                alt={props.altName}
                                className="picture"
                            />
                        )}
                    </div>
                );
            })}
            {length > 1 ? (
                <>
                    <div onClick={nextSlide}>
                        <img
                            src={nextArrow}
                            alt="Next slide"
                            className="arrow right"
                        ></img>
                    </div>
                    <div onClick={previousSlide}>
                        <img
                            src={previousArrow}
                            alt="Previous slide"
                            className="arrow left"
                        ></img>
                    </div>
                    <div className="count">
                        <span>
                            {displayPicture + 1}/{length}
                        </span>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default Carousel;

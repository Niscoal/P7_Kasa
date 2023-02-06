import React, { useState } from "react";
import nextArrow from "../assets/nextArrow.png";
import previousArrow from "../assets/previousArrow.png";

const Carousel = (props) => {
    const [displayPicture, setPicture] = useState(0); // Initialize Carousel index to 0
    const length = props.slide.length; // To have an index of images and display the arrows.

    const nextSlide = () => {
        if (displayPicture === length - 1) {
            // checks if the current displayed picture is the last picture in the slide
            setPicture(0); // reset the value of displayPicture to 0 : go back to initial picture
        } else {
            setPicture(displayPicture + 1); // on click, set current picture +1
        }
    };

    //Same inverted logic
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
                // reaches each picture to display it
                return (
                    <div key={index}>
                        {index === displayPicture && ( // Conditional display (true + expression = expression)
                            <img
                                src={picture}
                                alt={props.altName}
                                className="picture"
                            />
                        )}
                    </div>
                );
            })}
            {length > 1 ? ( // Manages arrow display if there's more than 1 picture and triggers its logic on click.
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

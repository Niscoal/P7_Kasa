import React from "react";
import { Navigate } from "react-router-dom";

const Rating = (props) => {
    try {
        return (
            <div className="stars">
                {Array(props.note) // creates an array of the length of the "note" property
                    .fill() // fills this array with unused values
                    .map((_, index) => (
                        <i key={index} className="fa-solid fa-star" />
                        // returns a star icon for each entry in the array
                    ))}
                {Array(props.base - props.note) // same logic for grey stars
                    .fill()
                    .map((_, index) => (
                        <i key={index} className="fa-solid fa-star grey" />
                    ))}
            </div>
        );
    } catch {
        return <Navigate to="/notFound" />;
    }
};

export default Rating;

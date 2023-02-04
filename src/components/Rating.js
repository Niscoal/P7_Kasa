import React from "react";
import { Navigate } from "react-router-dom";

const Rating = (props) => {
    try {
        return (
            <div className="stars">
                {Array(props.note)
                    .fill()
                    .map((_, index) => (
                        <i key={index} className="fa-solid fa-star" />
                    ))}
                {Array(props.base - props.note)
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

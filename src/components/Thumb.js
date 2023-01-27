import React from "react";
import { Link } from "react-router-dom";

const Thumb = ({ props }) => {
    return (
        <div>
            <Link to={`/logement/${props.id}`}>
                <img src={props.cover} alt="Illustration"></img>
                <h3>{props.title}</h3>
            </Link>
        </div>
    );
};

export default Thumb;

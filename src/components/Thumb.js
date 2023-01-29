import React from "react";
import { Link } from "react-router-dom";

const Thumb = (props) => {
    return (
        <div>
            <Link to={`/logement/${props.details.id}`}>
                <img src={props.details.cover} alt="Illustration"></img>
                <h3>{props.details.title}</h3>
            </Link>
        </div>
    );
};

export default Thumb;

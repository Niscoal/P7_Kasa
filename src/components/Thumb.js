import React from "react";
import { Link } from "react-router-dom";

const Thumb = (props) => {
    return (
        <div className="thumb">
            <Link to={`/logement/${props.details.id}`}>
                {/* reaches a specific "logement" using its id in url  */}
                {/* then display its related informations */}
                <img src={props.details.cover} alt="Illustration"></img>
                <div className="thumbFilter" />
                <h3>{props.details.title}</h3>
            </Link>
        </div>
    );
};

export default Thumb;

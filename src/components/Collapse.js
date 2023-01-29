import React, { useState } from "react";
import chevronDown from "../assets/collapse_chevronDown.png";
import chevronUp from "../assets/collapse_chevronUp.png";

const Collapse = (props) => {
    const [initial, setOpening] = useState(false);
    return (
        <div>
            <div onClick={() => setOpening(!initial)}>
                <div>
                    <span className="collapse__title">
                        {props.collapseTitle}
                    </span>
                    {initial && <img src={chevronDown} alt="chevron down" />}
                    {!initial && <img src={chevronUp} alt="chevron up" />}
                </div>
            </div>
            {initial && (
                <div className="collapse__content">{props.collapseContent}</div>
            )}
        </div>
    );
};

export default Collapse;

import React, { useState } from "react";
import chevronDown from "../assets/collapse_chevronDown.png";
import chevronUp from "../assets/collapse_chevronUp.png";

const Collapse = (props) => {
    const [initial, setOpening] = useState(false);

    return (
        <div className={props.collapseSize}>
            <div onClick={() => setOpening(!initial)} className="collapseUp">
                <span className="collapse__title">{props.collapseTitle}</span>
                {initial && <img src={chevronUp} alt="chevron up" />}
                {!initial && <img src={chevronDown} alt="chevron down" />}
            </div>

            {initial && (
                <div className="collapseDown">
                    {Array.isArray(props.collapseContent) ? (
                        <ul>
                            {props.collapseContent.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{props.collapseContent}</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Collapse;

import React, { useState } from "react";
import chevronDown from "../assets/collapse_chevronDown.png";
import chevronUp from "../assets/collapse_chevronUp.png";

const Collapse = (props) => {
    const [open, close] = useState(false);
    return (
        <div>
            <div onClick={() => close(!open)}>
                <div>
                    <span className="collapse__title">
                        {props.collapseTitle}
                    </span>
                    {open && <img src={chevronDown} alt="chevron down" />}
                    {!open && <img src={chevronUp} alt="chevron up" />}
                </div>
            </div>
            {open && (
                <div className="collapse__content">{props.collapseContent}</div>
            )}
        </div>
    );
};

export default Collapse;

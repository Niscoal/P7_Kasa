import React, { useState } from "react";
import chevronDown from "../assets/collapse_chevronDown.png";
import chevronUp from "../assets/collapse_chevronUp.png";

const Collapse = (props) => {
    const [initial, setOpening] = useState(true); //initialize collapse state to close
    // for undestanding ln14 & 16 : useState is set to "true", so the default (and collapse close state) is : initial

    return (
        <div className={props.collapseSize}>
            <div onClick={() => setOpening(!initial)} className="collapseUp">
                {/* Switch the state : false or true */}
                <span className="collapse__title">{props.collapseTitle}</span>
                {/* conditional display */}
                {initial && <img src={chevronDown} alt="chevron down" />}
                {/* initial is false when collapse is open */}
                {!initial && <img src={chevronUp} alt="chevron up" />}
            </div>

            {!initial && ( // when collapse is open, display content
                <div className="collapseDown">
                    {Array.isArray(props.collapseContent) ? (
                        // content may be different depending on the source of the data
                        <ul>
                            {props.collapseContent.map(
                                // array for "equipments" ...
                                (item, index) => (
                                    <li key={index}>{item}</li>
                                )
                            )}
                        </ul>
                    ) : (
                        <p>{props.collapseContent}</p> // ... and string for "description"
                    )}
                </div>
            )}
        </div>
    );
};

export default Collapse;

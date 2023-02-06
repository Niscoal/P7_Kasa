import React from "react";

const Tags = (props) => {
    return (
        <div className="tagContent">
            {props.keywords.map((tag, index) => {
                // return each tag of "tags" object key
                return (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                );
            })}
        </div>
    );
};

export default Tags;

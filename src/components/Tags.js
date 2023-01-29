import React from "react";

const Tags = (props) => {
    return (
        <div>
            {props.keywords.map((tag, index) => {
                return <span key={index}> {tag}</span>;
            })}
        </div>
    );
};

export default Tags;

import React from "react";

export const Card = ({ image, title, diets }) => {
    return (
        <div>
            {/* Image */}

            <div className="card-image-container">
                <img src={image} className={"card-image"}></img>
            </div>
            {/* Name */}
            <h3 className="card-title">{title}</h3>
            {/* Diet type */}
        </div>
    );
};

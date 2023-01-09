import React from "react";
import "../../styles/Recipes.css";
export const Card = ({ image, title, diets }) => {
    return (
        <div className="card-container">
            {/* Image */}

            <div className="card-image-container">
                <img src={image} className={"card-image"}></img>
            </div>
            <div className="text-container">
                <h3 className="card-title">{title}</h3>
                {diets.map((diet, index) => {
                    return (
                        <div className="diet-item">
                            <p className="diet-name">{diet}</p>
                        </div>
                    );
                })}
            </div>
            {/* Name */}
            {/* Diet type */}
        </div>
    );
};

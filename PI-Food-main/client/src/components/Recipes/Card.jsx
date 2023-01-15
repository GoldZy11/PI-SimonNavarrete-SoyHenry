import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Recipes.css";
export const Card = ({ image, title, diets, id }) => {
    return (
        <Link to={`/recipe/${id}`}>
            <div className="card-container">
                {/* Image */}

                <div className="card-image-container">
                    <img
                        src={
                            image
                                ? image
                                : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
                        }
                        className={"card-image"}
                    ></img>
                </div>
                <div className="text-container">
                    <h3 className="card-title" style={{ color: "#000" }}>
                        {title}
                    </h3>
                    <div className="diet-list">
                        {diets.map((diet, index) => {
                            if (index < 5)
                                return (
                                    <div className="diet-item" key={index}>
                                        <p
                                            className="diet-name"
                                            style={{ color: "#000" }}
                                        >
                                            {diet.name}
                                        </p>
                                    </div>
                                );
                        })}
                    </div>
                </div>
                {/* Name */}
                {/* Diet type */}
            </div>
        </Link>
    );
};

import React from "react";
import "../../styles/Filters.css";
import { Link } from "react-router-dom";
export const Filters = ({
    diets,
    handleDietFilter,
    handleAlphabeticalOrder,
    handleHealthScoreOrder,
}) => {
    return (
        <div
            style={{
                margin: "2rem",
                display: "flex",
                flexDirection: "row",
                gap: 5,
                justifyContent: "center",
            }}
        >
            <div className="dropdown">
                <span>Diets</span>
                <div className="dropdown-content">
                    {diets.map((diet, index) => {
                        return (
                            <div
                                key={index}
                                className="dropdown-item"
                                onClick={() => {
                                    handleDietFilter(diet.name);
                                }}
                            >
                                {diet.name}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="dropdown">
                <span>Orden</span>
                <div className="dropdown-content">
                    <div
                        className="dropdown-item"
                        onClick={handleAlphabeticalOrder}
                    >
                        Orden Alfabetico
                    </div>
                    <div
                        className="dropdown-item"
                        onClick={handleHealthScoreOrder}
                    >
                        Healt Score
                    </div>
                </div>
            </div>
            <div className="dropdown">
                <span>Options</span>
                <div className="dropdown-content">
                    <div
                        key={"add_recipe"}
                        className="dropdown-item"
                        // onClick={() => {
                        //     handleDietFilter(diet.name);
                        // }}
                    >
                        <Link to={"/recipe/create"}>Add Recipe</Link>
                    </div>
                    <div
                        key={"add_diet"}
                        className="dropdown-item"
                        // onClick={() => {
                        //     handleDietFilter(diet.name);
                        // }}
                    >
                        <Link to={"/diet/create"}>Add Diet</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

import React from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../components/utils/CustomButton";
import "../styles/Introduction.css";

export const Introduction = () => {
    return (
        <div className="introduction-container">
            <div className="introduction-card">
                <h2 className="introduction-title">
                    Welcome to World of Recipes.
                </h2>
                <Link to={"/home"}>
                    <CustomButton text={"Go to recipes."} />
                </Link>
            </div>
        </div>
    );
};

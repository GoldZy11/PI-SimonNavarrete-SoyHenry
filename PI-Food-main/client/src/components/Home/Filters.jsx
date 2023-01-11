import React from "react";
import "../../styles/Filters.css";
export const Filters = () => {
    return (
        <div
            style={{
                margin: "2rem",
                display: "flex",
                flexDirection: "row",
                gap: 5,
            }}
        >
            <div className="dropdown">
                <span>Diets</span>
                <div className="dropdown-content">
                    <div className="dropdown-item">hola</div>
                    <div className="dropdown-item">chao</div>
                    <div className="dropdown-item">hola</div>
                </div>
            </div>
            <div className="dropdown">
                <span>Orden</span>
                <div className="dropdown-content">
                    <div className="dropdown-item">Orden Alfabetico</div>
                    <div className="dropdown-item">Healt Score</div>
                </div>
            </div>
        </div>
    );
};

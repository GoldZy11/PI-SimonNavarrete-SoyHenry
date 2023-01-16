import React, { useEffect, useState } from "react";
import { Card } from "../Recipes/Card";
import "../../styles/Recipes.css";

export const CardsList = ({ recipes }) => {
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        console.log(recipes);
        setPages([]);
        let i = 0;
        let array = [];
        while (i < Math.ceil(recipes.length / 9)) {
            array.push(i);
            setPages([...array]);
            i = i + 1;
        }
    }, [recipes]);
    const handleNextPage = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePrevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <div>
            <div className="cardList-container">
                {recipes.map((recipe, index) => {
                    if (
                        (currentPage - 1) * 9 <= index &&
                        index < currentPage * 9
                    ) {
                        return (
                            <Card
                                key={index}
                                title={recipe.title}
                                image={recipe.image}
                                diets={recipe.diets}
                                id={recipe.id}
                            />
                        );
                    }
                })}
            </div>
            {/* Pagination */}
            <div className="pagination-container">
                <i
                    className={`fa fa-chevron-left pagination-button ${
                        currentPage === 1 ? "limit" : ""
                    }`}
                    onClick={handlePrevPage}
                ></i>

                {pages.map((page, index) => {
                    return (
                        <div
                            className={`pagination-item ${
                                page + 1 === currentPage ? "currentPage" : ""
                            }`}
                            onClick={() => {
                                setCurrentPage(page + 1);
                            }}
                        >
                            {page + 1}
                        </div>
                    );
                })}
                <i
                    className={`fa fa-chevron-right pagination-button ${
                        currentPage === pages.length ? "limit" : ""
                    }`}
                    onClick={handleNextPage}
                ></i>
            </div>
        </div>
    );
};

import React from "react";
import { SearchBar } from "./SearchBar";
import "../../styles/Home.css";
import { CardsList } from "./CardsList";

export const HomeMain = () => {
    const testCards = [
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
    ];
    return (
        <div className="home-container">
            {/* SearchBar and filters*/}
            <SearchBar />
            {/* Recipes List */}
            <CardsList recipes={testCards}/>
            {/* Pagination */}
        </div>
    );
};

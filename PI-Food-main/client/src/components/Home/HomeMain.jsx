import React from "react";
import { SearchBar } from "./SearchBar";
import "../../styles/Home.css";

export const HomeMain = () => {
    return (
        <div className="home-container">
            {/* SearchBar and filters*/}
            <SearchBar />
            {/* Recipes List */}
            {/* Pagination */}
        </div>
    );
};

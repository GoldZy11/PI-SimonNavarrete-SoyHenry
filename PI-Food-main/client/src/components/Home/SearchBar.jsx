import React from "react";
import "../../styles/SearchBar.css";
export const SearchBar = () => {
    return (
        <div className="container-searchbar">
            <form>
                <input className="input-bar" type="text" name="search" />
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
    );
};

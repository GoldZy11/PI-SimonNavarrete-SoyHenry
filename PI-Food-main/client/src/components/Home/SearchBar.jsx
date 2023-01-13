import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/SearchBar.css";
export const SearchBar = () => {
    const [search, setSearch] = useState("");
    let history = useHistory();
    const onChange = (event) => {
        setSearch(event.target.value);
    };
    const Submit = (event) => {
        event.preventDefault();
        history.push(`/search/${search}`);
    };
    return (
        <div className="container-searchbar">
            <form onSubmit={Submit}>
                <input
                    className="input-bar"
                    type="text"
                    name="search"
                    onChange={onChange}
                />
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </form>
        </div>
    );
};

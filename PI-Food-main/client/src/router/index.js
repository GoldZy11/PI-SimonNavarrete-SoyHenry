import React from "react";
import { Route, useLocation, useParams } from "react-router-dom";
import { Filters } from "../components/Home/Filters";
import { SearchBar } from "../components/Home/SearchBar";
import { CreateDiets } from "../pages/CreateDiets";
import { CreateRecipe } from "../pages/CreateRecipe";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";

export const AppRouter = () => {
    const location = useLocation();

    return (
        <main style={{ height: "100vh" }}>
            {location.pathname !== "/recipe/create" && (
                <>
                    <SearchBar />
                    {/* Filters */}
                    <Filters />
                </>
            )}

            {/* <Routes> */}
            <Route path={"/home"}>
                <Home />
            </Route>
            <Route path={"/search/:text"}>
                <Search />
            </Route>
            <Route path={"/recipe/create"}>
                <CreateRecipe />
            </Route>
            <Route path={"/diet/create"}>
                <CreateDiets />
            </Route>
            {/* </Routes> */}
        </main>
    );
};

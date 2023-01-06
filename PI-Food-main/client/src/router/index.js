import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../pages/Home";

export const AppRouter = () => {
    return (
        <main style={{ height: "100vh" }}>
            {/* <Routes> */}
            <Route path={"/home"}>
                <Home />
            </Route>
            {/* </Routes> */}
        </main>
    );
};

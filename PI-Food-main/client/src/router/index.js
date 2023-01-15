import React, { useEffect } from "react";
import { Route, useLocation, useParams } from "react-router-dom";
import * as actionsCreators from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { CreateDiets } from "../pages/CreateDiets";
import { CreateRecipe } from "../pages/CreateRecipe";
import { Home } from "../pages/Home";
import { Introduction } from "../pages/Introduction";
import { Search } from "../pages/Search";
import { Recipe } from "../pages/Recipe";

const AppRouter = ({ getDiets }) => {
    const location = useLocation();
    useEffect(() => {
        getDiets();
    }, []);
    return (
        <main style={{ height: "100vh" }}>
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
            <Route path={"/recipe/:id"}>
                <Recipe />
            </Route>
            <Route exact path={"/"}>
                <Introduction />
            </Route>
            {/* </Routes> */}
        </main>
    );
};

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);

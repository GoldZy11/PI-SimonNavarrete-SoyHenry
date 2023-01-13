import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Card } from "../Recipes/Card";
import * as actionsCreators from "../../actions";
import "../../styles/Search.css";
import { useLocation } from "react-router-dom";

const SearchMain = ({ getSearch, recipes, status }) => {
    const location = useLocation();

    useEffect(() => {
        getSearch();
    }, [location.pathname]);

    if (status) {
        return (
            <div className="loader-container">
                <span className="loader"></span>
            </div>
        );
    }
    return (
        <div className="searchPage-container">
            {recipes.map((recipe) => {
                return (
                    <div>
                        <Card
                            title={recipe.title}
                            image={recipe.image}
                            diets={recipe.diets}
                        />
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    recipes: state.recipes,
    status: state.loading,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchMain);

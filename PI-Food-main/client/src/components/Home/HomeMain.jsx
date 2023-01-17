import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import "../../styles/Home.css";
import * as actionsCreators from "../../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { CardsList } from "./CardsList";
import { Filters } from "./Filters";

const HomeMain = ({ getAll, getDiets, recipes, diets, status }) => {
    const [recipesFiltred, setRecipesFiltred] = useState(recipes);
    const handleDietFilter = (diet) => {
        setRecipesFiltred([
            ...recipes.filter((recipe) =>
                recipe.diets.some((e) => e.name === diet)
            ),
        ]);
    };
    const handleAlphabeticalOrder = () => {
        setRecipesFiltred([
            ...recipesFiltred.sort((a, b) => {
                let x = a["title"].toLowerCase();
                let y = b["title"].toLowerCase();
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            }),
        ]);
    };
    const handleHealthScoreOrder = () => {
        setRecipesFiltred([
            ...recipesFiltred.sort((a, b) => {
                let x = a["healthScore"];
                let y = b["healthScore"];
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            }),
        ]);
    };
    // useEffect(() => {
    //     getAll();
    // }, []);
    useEffect(() => {
        setRecipesFiltred(recipes);
    }, [recipes]);
    useEffect(() => {
        getAll();
        getDiets();
    }, []);
    if (status) {
        return (
            <div className="loader-container">
                <span className="loader"></span>
            </div>
        );
    }
    return (
        <div className="home-container">
            {/* Recipes List */}
            <SearchBar />
            {/* Filters */}
            <Filters
                diets={diets}
                handleDietFilter={handleDietFilter}
                handleAlphabeticalOrder={handleAlphabeticalOrder}
                handleHealthScoreOrder={handleHealthScoreOrder}
            />
            <CardsList recipes={recipesFiltred} status={status} />
            {/* Pagination */}
        </div>
    );
};
const mapStateToProps = (state) => ({
    recipes: state.recipes,
    diets: state.diets,
    status: state.loading,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeMain);

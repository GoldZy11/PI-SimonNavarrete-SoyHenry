import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Card } from "../Recipes/Card";
import * as actionsCreators from "../../actions";
import "../../styles/Search.css";
import { useLocation, useParams } from "react-router-dom";
import { Filters } from "../Home/Filters";
import { SearchBar } from "../Home/SearchBar";

const SearchMain = ({ getSearch, recipes, status, diets }) => {
    const location = useLocation();
    let { text } = useParams();
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
    useEffect(() => {
        getSearch(text);
    }, [location.pathname]);
    useEffect(() => {
        setRecipesFiltred(recipes);
    }, [recipes]);
   

    if (status) {
        return (
            <div className="loader-container">
                <span className="loader"></span>
            </div>
        );
    }
    return (
        <>
            <>
                <SearchBar />
                {/* Filters */}
                <Filters
                    diets={diets}
                    handleDietFilter={handleDietFilter}
                    handleAlphabeticalOrder={handleAlphabeticalOrder}
                    handleHealthScoreOrder={handleHealthScoreOrder}
                />
            </>
            <div className="searchPage-container">
                {recipesFiltred.map((recipe) => {
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
        </>
    );
};

const mapStateToProps = (state) => ({
    recipes: state.recipes,
    status: state.loading,
    diets: state.diets,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchMain);

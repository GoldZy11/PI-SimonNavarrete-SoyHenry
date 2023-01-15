import React, { useState } from "react";
import "../../styles/CreateRecipe.css";
import { connect } from "react-redux";
import * as actionsCreators from "../../actions";
import { bindActionCreators } from "redux";

const CreateRecipeMain = ({ createRecipe, recipes, status, diets }) => {
    const [recipe, setRecipe] = useState({
        title: "",
        healthScore: null,
        summary: "",
        instructions: "",
        diets: [],
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(value);
        setRecipe({ ...recipe, [name]: value });
    };
    const onDiet = (id) => {
        let dietRef = [...recipe.diets];
        let index = dietRef.indexOf(id);
        if (index != -1) {
            dietRef.splice(index, 1);
        } else {
            dietRef.push(id);
        }
        setRecipe({ ...recipe, ["diets"]: dietRef });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(recipe);
        // createRecipe(recipe);
    };
    return (
        <div className="card">
            <form
                onSubmit={onSubmit}
                onChange={handleInputChange}
                className={"createRecipe-form"}
            >
                <div className="inputbox">
                    <input
                        required={true}
                        name={"title"}
                        type="text"
                        value={recipe.title}
                    />
                    <span className="spanInput">Title</span>
                    <i></i>
                </div>
                <div className="inputbox">
                    <input
                        required={true}
                        name={"healthScore"}
                        type="number"
                        value={recipe.healthScore}
                    />
                    <span className="spanInput">Health Score</span>
                    <i></i>
                </div>

                <div className="inputbox">
                    <input
                        required={true}
                        name={"summary"}
                        type="text"
                        value={recipe.summary}
                    />
                    <span className="spanInput">Summary</span>
                    <i></i>
                </div>
                <div className="checkList-diets-container">
                    Check diets
                    <ul className="checkList">
                        {diets.map((diet) => {
                            return (
                                <li className="check-item">
                                    <div className="content">
                                        <label className="checkBox">
                                            <input id="ch1" type="checkbox" />
                                            <div className="transition"> </div>
                                        </label>
                                    </div>
                                    <div>{diet.name}</div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="inputbox inputMultiline">
                    <span>Instructions</span>
                    <textarea
                        className="multiline"
                        required={true}
                        name={"instructions"}
                        type="text"
                        style={{ height: "60px" }}
                        value={recipe.instructions}
                    />
                    <i></i>
                </div>
                <div className="button-container">
                    <button type="submit">Create Recipe</button>
                </div>
            </form>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipeMain);

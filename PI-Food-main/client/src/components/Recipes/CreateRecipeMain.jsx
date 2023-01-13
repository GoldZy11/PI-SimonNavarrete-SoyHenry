import React, { useState } from "react";
import "../../styles/CreateRecipe.css";
import { connect } from "react-redux";
import * as actionsCreators from "../../actions";
import { bindActionCreators } from "redux";

const CreateRecipeMain = ({ createRecipe, recipes, status }) => {
    const [recipe, setRecipe] = useState({
        title: "",
        heathScore: null,
        summary: "",
        instructions: "",
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(value);
        setRecipe({ ...recipe, [name]: value });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        createRecipe(recipe);
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
                        value={recipe.heathScore}
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
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipeMain);

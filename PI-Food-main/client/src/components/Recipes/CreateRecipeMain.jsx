import React, { useEffect, useState } from "react";
import "../../styles/CreateRecipe.css";
import { connect } from "react-redux";
import * as actionsCreators from "../../actions";
import { bindActionCreators } from "redux";
import { Modal } from "../utils/Modal";

const CreateRecipeMain = ({ createRecipe, recipes, status, diets, error }) => {
    const [recipe, setRecipe] = useState({
        title: "",
        healthScore: null,
        summary: "",
        instructions: "",
        diets: [],
        image: "",
    });
    const [dietsSelected, setDietsSelected] = useState([]);
    const [show, setShow] = useState(error.status);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name != "name") setRecipe({ ...recipe, [name]: value });
    };

    const onDiet = (e) => {
        // add to list
        if (e.target.checked) {
            setDietsSelected([...dietsSelected, e.target.value]);
        } else {
            // remove from list
            setRecipe(
                dietsSelected.filter((diet) => diet.id !== e.target.value.id)
            );
        }
    };
    const onSubmit = (event) => {
        event.preventDefault();
        console.log({ ...recipe, diets: dietsSelected });
        createRecipe({ ...recipe, diets: dietsSelected });
    };
    useEffect(() => {
        
        setShow(error.status);
    }, [error]);
    return (
        <div className="card">
            {error && (
                <Modal
                    show={show}
                    handleClose={() => {
                        setShow(false);
                    }}
                >
                    <h2>Something went wrong! Try again.</h2>
                    <p>
                        Error:
                        {error.message}
                    </p>
                </Modal>
            )}

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
                <div className="inputbox">
                    <input
                        required={true}
                        name={"image"}
                        type="text"
                        value={recipe.image}
                    />
                    <span className="spanInput">Image (url)</span>
                    <i></i>
                </div>
                <div className="checkList-diets-container">
                    Check diets
                    <ul className="checkList">
                        {diets.map((diet, index) => {
                            return (
                                <li className="check-item" key={index}>
                                    <div className="content">
                                        <label className="checkBox">
                                            <input
                                                id="ch1"
                                                type="checkbox"
                                                onChange={onDiet}
                                                value={diet.id}
                                                name="diets"
                                            />
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
                    <button type="submit" disabled={status}>
                        Create Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    recipes: state.recipes,
    status: state.loading,
    diets: state.diets,
    error: state.error,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipeMain);

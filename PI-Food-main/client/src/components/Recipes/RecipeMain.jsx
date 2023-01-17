import React, { useEffect, useState } from "react";
import * as actionsCreators from "../../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../../styles/Recipe.css";
import { Modal } from "../utils/Modal";

const RecipeMain = ({ recipe, status, error, getRecipe }) => {
    let { id } = useParams();
    const [show, setShow] = useState(error.status);
    let history = useHistory();

    useEffect(() => {
        getRecipe(id);
    }, []);

    useEffect(() => {
        setShow(error.status);
    }, [error]);
    if (status && !recipe.diets) {
        return (
            <div className="loader-container">
                <span className="loader"></span>
            </div>
        );
    }
    if (error.status) {
        return (
            <Modal
                show={show}
                handleClose={() => {
                    setShow(false);
                    history.push("/home");
                }}
            >
                <h2>Something went wrong! Try again.</h2>
                <p>Error: {error.message}</p>
            </Modal>
        );
    }
    return (
        <div className="recipe-container">
            {/* Title and Image */}
            <div className="head-container">
                {/* <div className="recipe-content-img-container"> */}
                <img
                    src={
                        recipe.image
                            ? recipe.image
                            : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
                    }
                    alt=""
                    className="recipe-content-img"
                />
                {/* </div> */}
                <div className="data-container">
                    <div>
                        <h1 className="recipe-content-title">{recipe.title}</h1>
                        <div>
                            <h2>Diets</h2>
                            <div className="diet-list">
                                {recipe.diets.map((diet, index) => {
                                    if (index < 5)
                                        return (
                                            <div
                                                className="diet-item"
                                                key={index}
                                            >
                                                <p
                                                    className="diet-name"
                                                    style={{
                                                        color: "#000",
                                                    }}
                                                >
                                                    {diet.name}
                                                </p>
                                            </div>
                                        );
                                })}
                            </div>
                            <h2>
                                Health Score : <span>{recipe.healthScore}</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="recipe-content-summary">
                <h2>Summary</h2>
                <p className="summary-p">{recipe.summary}</p>
            </div>
            <h2>Step by Step</h2>
            <ReactMarkdown className="recipe-content-body-container">
                {recipe.instructions}
            </ReactMarkdown>
        </div>
    );
};

const mapStateToProps = (state) => ({
    recipe: state.recipe,
    status: state.loading,
    error: state.error,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeMain);

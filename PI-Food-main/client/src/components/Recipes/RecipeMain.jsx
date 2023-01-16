import React, { useEffect } from "react";
import * as actionsCreators from "../../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const RecipeMain = ({ recipe, status, getRecipe }) => {
    let { id } = useParams();
    useEffect(() => {
        getRecipe(id);
    }, []);
    if (status) {
        return (
            <div className="loader-container">
                <span className="loader"></span>
            </div>
        );
    }
    return (
        <div>
            {/* Title and Image */}
            <div className="head-container">
                <div className="recipe-content-img-container">
                    <img
                        src={
                            recipe.image
                                ? recipe.image
                                : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
                        }
                        alt=""
                        className="recipe-content-img"
                    />
                </div>
                <h2 className="recipe-content-title">{recipe.title}</h2>
            </div>
            <div className="recipe-content-summary">
                <h2>Summary</h2>
                <p className="summary-p">{recipe.summary}</p>
            </div>
            {/* diets and health score */}
            <div className="data-container"></div>
            <ReactMarkdown className="recipe-content-body-container">
                {recipe.instructions}
            </ReactMarkdown>
        </div>
    );
};

const mapStateToProps = (state) => ({
    recipe: state.recipe,
    status: state.loading,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(RecipeMain);

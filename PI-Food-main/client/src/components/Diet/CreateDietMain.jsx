import React, { useEffect, useState } from "react";
import "../../styles/CreateRecipe.css";
import { connect } from "react-redux";
import * as actionsCreators from "../../actions";
import { bindActionCreators } from "redux";
import { Modal } from "../utils/Modal";

const CreateDietMain = ({ status, error, createDiet }) => {
    const [diet, setDiet] = useState({
        name: "",
    });
    const [show, setShow] = useState(error.status);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDiet({ ...diet, [name]: value });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        createDiet(diet);
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
                        Error: {error.message}
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
                        name={"name"}
                        type="text"
                        value={diet.name}
                    />
                    <span className="spanInput">Diet Name</span>
                    <i></i>
                </div>
                <div className="button-container">
                    <button type="submit" disabled={status}>
                        <p>Add Diet</p>
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    status: state.loading,
    error: state.error,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateDietMain);

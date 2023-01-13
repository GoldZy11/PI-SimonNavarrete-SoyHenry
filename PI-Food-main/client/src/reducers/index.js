import recipesAgent from "../agent";

const initialState = {
    recipes: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        // case "INCREMENT":
        //     return {
        //         ...state,
        //         count: state.count + 1,
        //     };
        // case "DECREMENT":
        //     return {
        //         ...state,
        //         count: state.count - 1,
        //     };
        // case "RESET":
        //     return {
        //         ...state,
        //         count: 0,
        //     };
        // case "ADD_FRIEND":
        //     state.amigos.push("Tito");
        //     return {
        //         ...state,
        //         amigos: state.amigos,
        //     };
        case "CREATE_RECIPE":
            return {
                ...state,
                loading: false,
            };
        case "GET_ALL":
            return {
                ...state,
                loading: false,
                recipes: action.recipes,
            };
        case "GET_SEARCH":
            return {
                ...state,
                loading: false,
                recipes: action.recipes,
            };
        case "LOADING":
            return {
                ...state,
                loading: true,
            };
        // state.amigos.push("Tito");

        default:
            return { ...state };
    }
};

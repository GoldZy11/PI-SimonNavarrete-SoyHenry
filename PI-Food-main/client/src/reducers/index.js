const initialState = {
    recipes: [],
    recipe: {},
    loading: false,
    diets: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
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
        case "ERROR":
            return {
                ...state,
                loading: false,
            };
        case "GET_DIETS":
            return {
                ...state,
                loading: false,
                diets: action.diets,
            };
        case "GET_RECIPE":
            return {
                ...state,
                loading: false,
                recipe: action.recipe,
            };
        // state.amigos.push("Tito");

        default:
            return { ...state };
    }
};

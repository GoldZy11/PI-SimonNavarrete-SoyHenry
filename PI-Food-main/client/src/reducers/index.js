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
        case "GET_ALL":
            recipesAgent.Recipes.recipesList()
                .then((response) => {
                    console.log(response);
                    return {
                        ...state,
                        recipes: state.recipes,
                    };
                })
                .catch(() => {
                    return {
                        ...state,
                        recipes: state.recipes,
                    };
                });
        // state.amigos.push("Tito");

        default:
            return { ...state };
    }
};

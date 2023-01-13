import recipesAgent from "../agent";

export function increment() {
    return {
        type: "INCREMENT",
    };
}
export function decrement() {
    return {
        type: "DECREMENT",
    };
}
export function reset() {
    return {
        type: "RESET",
    };
}

export function loading() {
    return {
        type: "LOADING",
    };
}
export function get(recipes) {
    return {
        type: "GET_ALL",
        recipes,
    };
}
export function created(recipes) {
    return {
        type: "CREATE_RECIPE",
        recipes,
    };
}
export function getAll() {
    return function (dispatch) {
        dispatch(loading());
        recipesAgent.Recipes.recipesList()
            .then((response) => {
                console.log(response);
                dispatch(get(response));
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
}
export function getSearch(search) {
    return function (dispatch) {
        dispatch(loading());
        recipesAgent.Recipes.recipesSearch(search)
            .then((response) => {
                console.log(response);
                dispatch(get(response));
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
}
export function createRecipe(recipe) {
    return function (dispatch) {
        dispatch(loading());
        recipesAgent.Recipes.recipesCreate(recipe)
            .then((response) => {
                console.log(response);
                dispatch(created());
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
}

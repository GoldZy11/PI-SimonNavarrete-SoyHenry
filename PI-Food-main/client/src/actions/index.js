import Agent from "../agent";

export function error() {
    return {
        type: "ERROR",
    };
}

export function loading() {
    return {
        type: "LOADING",
    };
}
export function getById(recipe) {
    return {
        type: "GET_RECIPE",
        recipe,
    };
}
export function get(recipes) {
    return {
        type: "GET_ALL",
        recipes,
    };
}
export function allDiets(diets) {
    return {
        type: "GET_DIETS",
        diets,
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
        Agent.Recipes.recipesList()
            .then((response) => {
                if (response.error) {
                    dispatch(error());
                } else {
                    dispatch(get(response));
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
}
export function getRecipe(id) {
    return function (dispatch) {
        dispatch(loading());
        Agent.Recipes.recipe(id)
            .then((response) => {
                if (response.error) {
                    dispatch(error());
                } else {
                    dispatch(getById(response));
                }
            })
            .catch((error) => {
                dispatch(error());
                console.log(error.message);
            });
    };
}
export function getDiets() {
    return function (dispatch) {
        dispatch(loading());
        Agent.Diets.dietsList()
            .then((response) => {
                dispatch(allDiets(response));
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
}
export function getSearch(search) {
    return function (dispatch) {
        dispatch(loading());
        Agent.Recipes.recipesSearch(search)
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
        Agent.Recipes.recipesCreate(recipe)
            .then((response) => {
                console.log(response);
                dispatch(created());
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
}

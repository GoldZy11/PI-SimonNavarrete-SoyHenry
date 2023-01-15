import axios from "axios";

const url = "http://localhost:3001";

const responseBody = (response) => response.data;

const requests = {
    // get: () => axios.get(url, config).then(responseBody
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    del: (url) => axios.delete(url).then(responseBody),
};

const Recipes = {
    recipesList: () => requests.get(url + "/recipes"),
    recipesSearch: (text) => requests.get(url + `/recipes?name=${text}`),
    recipesCreate: (body) => requests.post(url + "/recipes", body),
    recipe: (id) => requests.get(url + `/recipes/${id}`),
};
const Diets = {
    dietsList: () => requests.get(url + "/diets"),
};

const Agent = {
    Recipes,
    Diets,
};

export default Agent;

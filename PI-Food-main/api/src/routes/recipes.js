var express = require("express");
var router = express.Router();
var sequelize = require("../db");
const Recipe = require("../models/Recipe");
/* GET users listing. */
router.get("/test", async function (req, res, next) {
    const recipes = await sequelize.Recipe.findAll({
        include: {
            model: sequelize.Diet,
            through: {
                attributes: [],
            },
        },
    });
    res.json(recipes);
});
router.get("/", async function (req, res, next) {
    const { name } = req.query;
    if (name) {
        fetch(
            "https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
                process.env.API_KEY +
                "&number=100&addRecipeInformation=true"
        )
            .then((response) => response.json())
            .then(async (data) => {
                try {
                    let apiItems = data.results;
                    const recipes = await sequelize.Recipe.findAll({
                        include: {
                            model: sequelize.Diet,
                            through: {
                                attributes: [],
                            },
                        },
                    });
                    var allRecipes = [];
                    if (apiItems) {
                        const filtred = apiItems.filter((recipe) =>
                            recipe.title.includes(name)
                        );
                        allRecipes = [
                            ...recipes.filter((recipe) =>
                                recipe.title.includes(name)
                            ),
                            ...filtred.map((recipe) => {
                                return {
                                    id: recipe.id,
                                    title: recipe.title,
                                    diets: recipe.diets.map((diet) => {
                                        return {
                                            name: diet,
                                        };
                                    }),
                                    healthScore: recipe.healthScore,
                                    instructions: recipe.instructions,
                                    summary: recipe.summary,
                                    image: recipe.image,
                                };
                            }),
                        ];
                    } else {
                        allRecipes = [
                            ...recipes.filter((recipe) =>
                                recipe.title.includes(name)
                            ),
                        ];
                    }
                    if (allRecipes.length > 0) res.json(allRecipes);
                    else {
                        res.json({
                            error: "No existe ninguna receta con esa palabra",
                        });
                    }
                } catch (error) {
                    console.log(error);
                    res.status(500);
                    res.json({
                        message: "Algo Ocurrio, vuelva a intentarlo mas tarde",
                    });
                }
            });
    } else {
        fetch(
            "https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
                process.env.API_KEY +
                "&number=100&addRecipeInformation=true"
        )
            .then((response) => response.json())
            .then(async (data) => {
                try {
                    let apiItems = data.results;
                    const recipes = await sequelize.Recipe.findAll({
                        include: {
                            model: sequelize.Diet,
                            through: {
                                attributes: [],
                            },
                        },
                    });
                    var allRecipes = [];
                    if (apiItems) {
                        allRecipes = [
                            ...recipes,
                            ...apiItems.map((recipe) => {
                                return {
                                    id: recipe.id,
                                    title: recipe.title,
                                    diets: recipe.diets.map((diet) => {
                                        return {
                                            name: diet,
                                        };
                                    }),
                                    healthScore: recipe.healthScore,
                                    instructions: recipe.instructions,
                                    summary: recipe.summary,
                                    image: recipe.image,
                                };
                            }),
                        ];
                    } else {
                        allRecipes = [...recipes];
                    }

                    if (allRecipes.length > 0) {
                        res.json(allRecipes);
                    } else
                        res.json({
                            error: "No existe ninguna receta.",
                        });
                } catch (error) {
                    console.log(error);
                    res.status(500);
                    res.json({
                        message: "Algo Ocurrio, vuelva a intentarlo mas tarde",
                    });
                }
            });
        // .catch(async () => {
        //     try {
        //         const recipes = await sequelize.Recipe.findAll({});
        //         res.json(
        //             recipes.map((a) => {
        //                 return {
        //                     id: a.id,
        //                     title: a.title,
        //                     diets: a.diets,
        //                     healthScore: a.healthScore,
        //                     instructions: a.instructions,
        //                     summary: a.summary,
        //                     image: a.image,
        //                 };
        //             })
        //         );
        //     } catch (error) {
        //         res.status(500);
        //         res.json({
        //             message: "Algo Ocurrio, vuelva a intentarlo mas tarde",
        //         });
        //     }
        // });
    }
});
router.get("/:id", function (req, res, next) {
    const { id } = req.params;
    let response = [];

    fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`

        // "&number=100&addRecipeInformation=true"
    )
        .then((response) => response.json())
        .then(async (data) => {
            console.log(data);
            try {
                res.json({
                    id: data.id,
                    title: data.title,
                    diets: data.diets.map((diet) => {
                        return {
                            name: diet,
                        };
                    }),
                    healthScore: data.healthScore,
                    instructions: data.instructions,
                    summary: data.summary,
                    image: data.image,
                });
                // else
                //     res.json({
                //         error: "No existe ninguna receta con esa palabra",
                //     });
            } catch (error) {
                res.status(500);
                res.json({
                    message:
                        "Receta no encontrada, vuelva a intentarlo mas tarde",
                });
            }
        })
        .catch(async (response) => {
            try {
                const recipe = await sequelize.Recipe.findByPk(id);
                res.json(recipe);
            } catch (error) {
                res.status(500);
                res.json({
                    message:
                        "Receta no encontrada, vuelva a intentarlo mas tarde",
                    response,
                });
            }
        });
});
router.post("/", async function (req, res, next) {
    const { title, summary, healthScore, instructions, diets , image} = req.body;
    try {
        const newRecipe = await sequelize.Recipe.create({
            title,
            summary,
            healthScore,
            instructions,
            image
        });
        const addDiets = await newRecipe.setDiets(diets);
        console.log(addDiets, "Diets");
        console.log(newRecipe, "created");
        res.json(newRecipe);
    } catch (error) {
        res.status(500);
        console.log(error.message);
        res.send(error.message);
    }
});
module.exports = router;

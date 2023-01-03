var express = require("express");
var router = express.Router();
var sequelize = require("../db");
const Recipe = require("../models/Recipe");
/* GET users listing. */
router.get("/", function (req, res, next) {
    const { name } = req.query;
    let response = [];
    if (name) {
        fetch(
            "https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
                process.env.API_KEY +
                "&number=100&addRecipeInformation=true"
        )
            .then((response) => response.json())
            .then(async (data) => {
                try {
                    let filtred = data.results.filter((element) =>
                        element.title.includes(name)
                    );
                    // let result = filtred.map((element) => {element.title})
                    const recipes = await sequelize.Recipe.findAll({});
                    let response = [
                        ...recipes.filter((element) =>
                            element.title.includes(name)
                        ),
                        ...filtred,
                    ];
                    if (response.length > 0) res.json(response);
                    else
                        res.json({
                            error: "No existe ninguna receta con esa palabra",
                        });
                } catch (error) {
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
                    // let result = filtred.map((element) => {element.title})
                    const recipes = await sequelize.Recipe.findAll({});
                    console.log(recipes, "hola");
                    let response = [...recipes, ...apiItems];
                    if (response.length > 0) res.json(response);
                    else
                        res.json({
                            error: "No existe ninguna receta.",
                        });
                } catch (error) {
                    res.status(500);
                    res.json({
                        message: "Algo Ocurrio, vuelva a intentarlo mas tarde",
                    });
                }
            });
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
            try {
                res.json(data);
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
    const { title, summary, healthScore, instructions } = req.body;
    try {
        const newRecipe = await sequelize.Recipe.create({
            title,
            summary,
            healthScore,
            instructions,
        });
        console.log(newRecipe, "created");
        res.json(newRecipe);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
});
module.exports = router;

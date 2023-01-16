var express = require("express");
var router = express.Router();
var sequelize = require("../db");
router.post("/", async function (req, res, next) {
    const { name } = req.body;
    try {
        const [newDiet, created] = await sequelize.Diet.findOrCreate({
            where: { name: name },
            defaults: {},
        });
        if (created) {
            console.log(newDiet, "created");
            const diets = await sequelize.Diet.findAll({
                // include:sequelize.Recipe
            });
            res.json(diets);
        } else {
            res.status(500);
            // console.log(error.message);
            res.json({
                error: "This diet already exists",
            });
        }
        // const newDiet = await sequelize.Diet.fi({
        //     name,
        // });
    } catch (error) {
        res.status(500);
        console.log(error.message);
        res.json(error);
    }
});
router.get("/", async function (req, res, next) {
    const diets = await sequelize.Diet.findAll({
        // include:sequelize.Recipe
    });
    res.json(diets);
});
router.get("/load", async function (req, res, next) {
    fetch(
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=" +
            process.env.API_KEY +
            "&number=100&addRecipeInformation=true"
    )
        .then((response) => response.json())
        .then(async (data) => {
            let apiItems = data.results;
            if (apiItems) {
                for (const recipe of apiItems) {
                    for (const diet of recipe.diets) {
                        const dietFind = await sequelize.Diet.findOne({
                            where: { name: diet },
                        });
                        if (!dietFind)
                            newDiet = await sequelize.Diet.create({
                                name: diet,
                            });
                    }
                }
                res.json({ status: "done" });
                // apiItems.forEach(async (element) => {
                //     // console.log(element.diets);
                //     element.diets.forEach(async (diet) => {
                //         const dietFind = await sequelize.Diet.findOne({
                //             where: { name: diet },
                //         });
                //         if (!dietFind)
                //             newDiet = await sequelize.Diet.create({
                //                 name: diet,
                //             });
                //     });
                // });
            }
        });
    // const diets = await sequelize.Diet.findAll({
    //     // include:sequelize.Recipe
    // });

    // res.json(diets);
});
module.exports = router;

var express = require("express");
var router = express.Router();
var sequelize = require("../db");
router.post("/", async function (req, res, next) {
    const { name } = req.body;
    try {
        const newDiet = await sequelize.Diet.create({
            name,
        });
        console.log(newDiet, "created");
        res.json(newDiet);
    } catch (error) {
        res.status(500);
        console.log(error.message);
        res.send(error.message);
    }
});
router.get("/test", async function (req, res, next) {
    const diets = await sequelize.Diet.findAll({});
    res.json(diets);
});
module.exports = router;

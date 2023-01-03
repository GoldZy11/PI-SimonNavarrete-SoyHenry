const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("recipe", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // readyInMinutes: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // imageUrl: {
        //     type: DataTypes.STRING,
        //     allowNull: true,
        // },
        summary: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        // servings: {
        //     type: DataTypes.REAL,
        //     allowNull: false,
        // },
        healthScore: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        // pricePerServing: {
        //     type: DataTypes.FLOAT,
        //     allowNull: false,
        // },
        instructions: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        // ingredients: {
        //     type: DataTypes.ARRAY(DataTypes.STRING),
        // },
    });
};

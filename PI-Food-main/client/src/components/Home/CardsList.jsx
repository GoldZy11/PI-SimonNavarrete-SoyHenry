import React from "react";
import { Card } from "../Recipes/Card";

export const CardsList = ({ recipes }) => {
    return (
        <div>
            {recipes.map((recipe, index) => {
                return (
                    <Card
                        title={recipe.title}
                        image={recipe.image}
                        diets={recipe.diets}
                    />
                );
            })}
        </div>
    );
};

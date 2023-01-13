import React from "react";
import CreateRecipeMain from "../components/Recipes/CreateRecipeMain";

export const CreateRecipe = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CreateRecipeMain />
        </div>
    );
};

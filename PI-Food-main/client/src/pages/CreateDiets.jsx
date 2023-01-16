import React from "react";
import CreateDietMain from "../components/Diet/CreateDietMain";
export const CreateDiets = () => {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <CreateDietMain />
        </div>
    );
};

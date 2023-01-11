import React, { useEffect } from "react";
import { SearchBar } from "./SearchBar";
import "../../styles/Home.css";
import * as actionsCreators from "../../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { CardsList } from "./CardsList";
import { Filters } from "./Filters";

const HomeMain = ({ getAll, recipes }) => {
    const testCards = [
        {
            title: "Sopa de awa 1",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa2",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa3",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa4",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa5",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa6",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa7",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa8",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa9",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa10",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa11",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa12",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa13",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa14",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa15",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa16",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa17",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de 18",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
        {
            title: "Sopa de awa",
            image: "https://www.goodnes.com/sites/g/files/jgfbjl321/files/srh_recipes/7930c00456f1d0089f82ab8df3dd6b1c.jpg",
            diets: ["vegan", "veggi"],
        },
    ];
    useEffect(() => {
        console.log(recipes);
        getAll();
    }, []);

    return (
        <div className="home-container">
            {/* SearchBar and filters*/}
            <SearchBar />
            {/* Filters */}
            <Filters />
            {/* Recipes List */}
            <CardsList recipes={testCards} />
            {/* Pagination */}
        </div>
    );
};
const mapStateToProps = (state) => ({
    recipes: state.recipes,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeMain);

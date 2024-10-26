// client/src/components/RecipeList.js
import React from 'react';

// The RecipeList component will display the list of recipes fetched from the API.
const RecipeList = ({ recipes }) => (
    <div className="columns is-multiline">
        {recipes.map((recipe, index) => (
            <div key={index} className="column is-one-quarter">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <p className="title is-4">{recipe.recipe.label}</p>
                        <p>Calories: {Math.round(recipe.recipe.calories)}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default RecipeList;

// client/src/components/RecipeForm.js
import React, { useState } from 'react';
import axios from 'axios';

// The RecipeForm component will take user input for ingredients and trigger the search.

const RecipeForm = ({ setRecipes }) => {
    const [ingredients, setIngredients] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/recipes', { ingredients });
            setRecipes(response.data);
        } catch (error) {
            console.error("Error fetching recipes", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">Enter Ingredients</label>
                <div className="control">
                    <input
                        className="input"
                        type="text"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder="e.g., steak, spinach"
                    />
                </div>
            </div>
            <div className="control">
                <button type="submit" className="button is-primary">Search Recipes</button>
            </div>
        </form>
    );
};

export default RecipeForm;

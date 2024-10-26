// server/index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

// Configure environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Route for fetching recipes based on ingredients
app.post('/api/recipes', async (req, res) => {
    const { ingredients } = req.body;
    
    try {
        const response = await axios.get('https://api.edamam.com/search', {
            params: {
                q: ingredients,
                app_id: process.env.EDAMAM_APP_ID,
                app_key: process.env.EDAMAM_API_KEY
            }
        });

        // Return the API response data (list of recipes) to the frontend
        res.json(response.data.hits);
    } catch (error) {
        console.error("Error fetching recipes:", error);
        res.status(500).json({ message: "Error fetching recipes" });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
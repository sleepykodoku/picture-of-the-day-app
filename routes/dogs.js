const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/random', async (req, res) => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/images/search', {
            headers: {
                'x-api-key': process.env.DOG_API_KEY
            }
        });
        res.json(response.data[0]);
    } catch (error) {
        console.error('Error fetching dog:', error);
        res.status(500).json({ 
            error: 'Failed to fetch dog image',
            details: error.message 
        });
    }
});

module.exports = router;
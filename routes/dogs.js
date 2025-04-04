const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/random', async (req, res) => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/images/search');
        res.json(response.data[0]);
    } catch (error) {
        console.error('Error fetching dog:', error);
        res.status(500).json({ error: 'Failed to fetch dog image' });
    }
});

module.exports = router;
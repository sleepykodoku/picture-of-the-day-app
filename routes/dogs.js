const express = require('express');
const router = express.Router();

router.get('/random', (req, res) => {
    fetch('https://api.thedogapi.com/v1/images/search', {
        headers: {
            'x-api-key': process.env.DOG_API_KEY
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Dog API responded with status ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        res.json(data[0]);
    })
    .catch(error => {
        console.error('Error fetching dog:', error);
        res.status(500).json({
            error: 'Failed to fetch dog image',
            details: error.message
        });
    });
});

module.exports = router;

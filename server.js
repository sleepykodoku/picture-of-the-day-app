require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const dogsRouter = require('./routes/dogs');

// Set up EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files/Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use('/dogs', dogsRouter);

// Basic route
app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
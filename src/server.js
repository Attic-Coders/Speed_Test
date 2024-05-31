const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, '../src/game')));
app.use(express.static(path.join(__dirname, '../src/images')));
app.use(express.static(path.join(__dirname, '../src/menu')));

// Define the route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/game/game.html'));
});

// Endpoint to get words from the text file

app.get('/words', (req, res) => {
    fs.readFile(path.join(__dirname, '/src/game/allWords.txt'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        res.json({ words: data.split('\n') });
    });
});


// Start the server on port 8080
app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});

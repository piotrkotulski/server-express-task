const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.use((req, res, next) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname, `/views/${name}`));
    };
    next();
});

app.use('/user/*', (req, res, next) => {
    res.show('forbidden.html');
});

app.get(['/', '/home'], (req, res) => {
    res.show('home.html');
});

app.get('/about', (req, res) => {
    res.show('about.html');
});

app.get('/404.jpeg', (req, res) => {
    res.sendFile(path.join(__dirname, '404.jpeg'));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
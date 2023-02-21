// Create a basic express server

const path = require('path')

const express = require('express');
const app = express();
const port = 3000;

let count = 0;

app.get('/', (req, res) => res.sendFile(__dirname + '/front/main.html'));

app.get('/get', (req, res) => res.send({"count": count}));
app.get('/plus', (req, res) => res.send({"count": ++count}));
app.get('/minus', (req, res) => res.send({"count": --count}));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`Basic count app listening on port ${port}!`));
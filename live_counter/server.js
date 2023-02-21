const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


let counter = 0;

app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => res.sendFile(__dirname + '/front/main.html'));
app.get('/get', (req, res) => res.send({"count": counter}));

io.on('connection', (socket) => {
    console.log('A user connected!')
    socket.on('plus', msg => {
        console.log('A user clicked plus!');
        counter++;
        update();
    });
    
    socket.on('minus', msg => {
        console.log('A user clicked minus!');
        counter--;
        update();
    });
});

io.on('disconnect', (socket) => {
    console.log('A user disconnected!')
});

function update() {
    io.emit('update', counter);
}



server.listen(port, () => console.log(`Live count app listening on port ${port}!`));



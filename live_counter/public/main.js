const server = "http://127.0.0.1:3000"
const ws_server = "ws://127.0.0.1"

var socket = io()

socket.on('connect', () => console.log('Connected to server!'));
socket.on('update', (number) => {
    console.log('Update received!');
    change(number);
});

function refresh() {
    fetch(server + '/get')
        .then(response => response.json())
        .then(object => change(object['count']));
}

function change(number) {
    console.log(number);
    document.getElementById('count').innerText = number;
}

this.document.getElementById('plus').addEventListener('click', () => socket.emit('plus', {"coucou": "salut"}));
this.document.getElementById('minus').addEventListener('click', () => socket.emit('minus', {}));
this.document.getElementById('refresh').addEventListener('click', () => refresh());

refresh();
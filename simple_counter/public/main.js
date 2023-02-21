const server = "http://127.0.0.1:3000"

function plus() {
    fetch(server + '/plus')
        .then(response => response.json())
        .then(object => change(object['count']));   
}

function minus() {
    fetch(server + '/minus')
        .then(response => response.json())
        .then(object => change(object['count']));
}

function refresh() {
    fetch(server + '/get')
        .then(response => response.json())
        .then(object => change(object['count']));
}

function change(number) {
    console.log(number);
    document.getElementById('count').innerText = number;
}


window.addEventListener('load', () => {
    this.document.getElementById('plus').addEventListener('click', () => plus());
    this.document.getElementById('minus').addEventListener('click', () => minus());
    this.document.getElementById('refresh').addEventListener('click', () => refresh());
    refresh();
});
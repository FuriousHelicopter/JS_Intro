function plus() {
    fetch('http://127.0.0.1:5000/plus')
        .then(response => response.json())
        .then(data => change(data));
}

function moins() {
    fetch('http://127.0.0.1:5000/moins')
        .then(response => response.json())
        .then(data => change(data));
}

function get() {
    fetch('http://127.0.0.1:5000/get')
        .then(response => response.json())
        .then(data => change(data));
}

function change(nombre) {
    document.getElementById("compteur").innerText = nombre;
}

document.getElementById("plus").addEventListener("click", () => {
    plus()
});
document.getElementById("moins").addEventListener("click", () => {
    moins()
});
document.getElementById("refresh").addEventListener("click", () => {
    get()
});

get();


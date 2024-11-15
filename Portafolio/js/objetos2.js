/*
let nombre = prompt("Como te llamas?");

if (nombre) {
    alert(`Hola ${nombre}`);
} else {
    alert("anónimo");
}
*/

let lista = document.getElementById("log");

function registro(texto){
    let item = document.createElement("li");
    item.innerText = texto;
    return item;
}

lista.appendChild(registro("DOM LOADED"))

let timer = setTimeout(() => {
    lista.appendChild(registro("Timer"));
}, 3000);

let repetidor = setInterval(() => {
    lista.appendChild(registro("Cada 1.5 seg"))
}, 1500);

let activaTimerBtn = document.getElementById("activaTimer");
let stopBtn = document.getElementById("pararRepetidor");

activaTimerBtn.addEventListener("click", function(){
    lista.appendChild(registro("Inicia timer..."));
 //   clearTimeout(timer);
 //   timer.setTimeout(3000);
})

stopBtn.addEventListener("click", function(){
    lista.appendChild(registro("Parar repetidor"));
    clearInterval(repetidor);
})



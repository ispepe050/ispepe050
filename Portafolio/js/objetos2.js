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

function iniciarRepetidor() {
    repetidor = setInterval(() => {
        lista.appendChild(registro("Cada 1.5 seg"));
    }, 1500);
}

let activaTimerBtn = document.getElementById("activaTimer");
let stopBtn = document.getElementById("pararReptidor");

activaTimerBtn.addEventListener("click", function(){
    lista.appendChild(registro("Inicia timer..."));
 //   clearTimeout(timer);
 //   timer.setTimeout(3000);
})

stopBtn.addEventListener("click", function(){
    lista.appendChild(registro("Parar repetidor"));
    clearInterval(repetidor);
})

let reanudarBtn = document.getElementById("reanudarRepetidor");
reanudarBtn.addEventListener("click", function() {
    lista.appendChild(registro("Reanudar repetidor"));
    iniciarRepetidor();
});

let secure = document.getElementById("secure");


if (location.protocol == "https:") {
  secure.innerText = "Seguro"; 
} else {
  secure.innerText = "No seguro";
}
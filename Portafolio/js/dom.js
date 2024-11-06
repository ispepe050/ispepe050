let titulo = document.getElementById("titulo");
console.log(titulo.textContent);

let parrafos = document.getElementsByTagName("p");
console.table(parrafos);

let parrafos2 = document.getElementsByClassName("parrafo");
console.log(parrafos2[1].textContent);

let parrafo = document.querySelector(".parrafo");
console.log(parrafo.textContent);


titulo.style.color = "red"
Array.from(parrafos).forEach((el, idx) => {
el.innerText = "Texto " + (idx + 1);
});
parrafos2[1].style.backgroundColor ="greenyellow";
parrafos2[1].innerHTML = "<strong>Nuevo párrafo</strong>";
parrafo.className = "nuevo-parrafo";
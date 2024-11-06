console.log("Hola mundo desde otro archivo");

let objeto = { nombre:"Jose", edad:20 };
let numeros = [1,2,3,4,5,6];


let fecha = new Date();

console.table(objeto);
console.table(numeros);
console.log(sumar(10, 9));
console.log(fecha);

function sumar(a, b) {
  return a + b;
}

let edad = 20;

if (edad>=18) {
  console.info("Eres mayor de edad");
} else {
  console.info("Eres menor de edad");
}

let anio = prompt("En qu año naciste?");
let anio_actual = new Date().getFullYear();
let age = anio_actual - anio;

if(age >= 18) {
    console.info("Eres mayor de edad");
} else if(age >= 12 && age < 18) {
    if(age === 12) {
        console.log("Eres un preadolescente");
    } else {
        console.log("Eres un adolescente");
    } 
} else {
    console.warn("Eres un niño");
}

age = anio_actual - anio;
console.info(age);

let dia = parseInt(prompt ("Ingresa un número del 1 al 7"));

switch(dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    default:
        console.error("Día no válido");
}

let resta = (a, b) => {
    return a - b;
};

console.log(resta(5, 3));


let multiplicacion = (a, b) => a * b;

console.log(multiplicacion(5, 3));


let objeto1 = {
    nombre: "Jose",
    saludar: function(){
        setTimeout(() => {
            console.log(`Hola, soy ${this.nombre}`);
        }, 1000);
    },
};

objeto1.saludar();

let frutas = ["🍎", "🍐", "🍇", "🍓"];

frutas.push("🥭");
frutas.unshift("🍌");
frutas.pop();
console.log(frutas); // 🍌, 🍎, 🍐, 🍇

let frutas2 = frutas.slice(1, 3);
console.log(frutas2.join(" - ")); // 🍎 - 🍐
console.log(frutas.length); // 4
console.log(frutas.indexOf("🍇")); // 3

let frutas3 = frutas.map((fruta) => fruta + "🍉");

console.table(frutas3);

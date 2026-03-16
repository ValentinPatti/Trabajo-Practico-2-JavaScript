//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

const nombre1 = prompt("ingresa el primer nombre");
const num1 = parseInt(prompt("ingresa la primer edad"));
const nombre2 = prompt("ingresa el segundo nombre");
const num2 = parseInt(prompt("ingresa la segunda edad"));
const nombre3 = prompt("ingresa el tercer nombre");
const num3 = parseInt(prompt("ingresa la tercer edad"));

let edadMayor = Math.max(num1, num2, num3);
let nombreMayor = "";

if (edadMayor === num1) {
  nombreMayor = nombre1;
} else {
  if (edadMayor === num2) {
    nombreMayor = nombre2;
  } else {
    nombreMayor = nombre3;
  }
}

alert(`${nombreMayor} es el mayor con ${edadMayor} años`);

//Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

const texto = prompt("Ingrese el texto");
let i = 0;
let posicion = 0;
let letra = 0;
while (i < texto.length) {
  letra = texto.charAt(i);
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u" ||
    letra === "A" ||
    letra === "E" ||
    letra === "I" ||
    letra === "O" ||
    letra === "U"
  ) {
    posicion = i
    break;
  }
  i += 1;
}

console.log(`la vocal ${letra} esta en la posicion ${posicion}`);

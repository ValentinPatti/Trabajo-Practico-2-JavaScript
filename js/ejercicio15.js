//Realiza un script que cuente el número de vocales que tiene un texto.

const texto = prompt("Ingrese un texto:");
let i = 0;
let vocales = 0

while (i < texto.length) {
  let letra = texto.charAt(i);
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
    vocales += 1
}
i = i + 1;
}
console.log(`El texto tiene ${vocales} vocales`)
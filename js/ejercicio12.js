//Realiza un script que genere un número aleatorio entre 1 y 99

const minCeiled = Math.ceil(1);
const maxFloored = Math.floor(99);
console.log (Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled));

//Math.random(): genera un valor aleatorio entre 0 y 1
//maxFloored: redondea el numero maximo hacia abajo
//minCeiled: redondea el numero minimo hacia arriba

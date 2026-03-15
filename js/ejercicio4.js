//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;
let continuar = true;

while (continuar) {
  let numero = parseInt(prompt("Ingresa un numero"));

  if (numero - numero === 0) {
    suma += numero;
  } else {
    alert("no es un numero");
  }

  continuar = confirm("¿Deseas introducir otro número?");
}

alert(`La suma es ${suma}`);

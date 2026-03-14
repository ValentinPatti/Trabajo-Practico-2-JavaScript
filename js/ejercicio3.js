//Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -

let resultado = ""; 
let continuar = true; // mientras tenga el valor 'true' seguirá pidiendo texto

while (continuar) {
    let cadena = prompt("Introduce una cadena de texto:");

    if (cadena !== null) { //si se presiona 'cancelar' el prompt devuelve valor null 
        if (resultado === "") {
            resultado = cadena; 
        } else {
            resultado = resultado + "-" + cadena;
        }
    }

    continuar = confirm("¿Deseas introducir otra cadena?"); // con 'true' el bucle sigue y 'false' el bucle termina
}

if (resultado !== "") {
    alert("Cadenas concatenadas: " + resultado);
} else {
    alert("No se introdujo ninguna cadena.");
}
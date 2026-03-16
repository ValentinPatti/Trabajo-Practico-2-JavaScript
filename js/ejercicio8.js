/*Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
1
12
123
1234
12345
123456
*/

let numero = parseInt(prompt("Ingrese un número del 1 al 50"));

if (1 <= numero && numero <= 50) {
  for (contador = 1; contador <= numero; contador++) {
    let fila = "";
    for (i = 1; i <= contador; i++) {
      fila += i + "";
    }
    console.log(fila); 
  }
} else {
  alert("número inválido");
}

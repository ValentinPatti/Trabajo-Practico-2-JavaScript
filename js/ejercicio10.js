//Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const pantalla = document.getElementById("pantalla");
const filas = parseInt(prompt("ingresa un numero de filas"));
const columnas = parseInt(prompt("ingresa un numero de columnas"));
let tabla = `<table class = "table table-striped"><tbody>`;
let celda = filas * columnas

for (let indiceFilas = 1; indiceFilas <= filas; indiceFilas++) {
  tabla += `<tr>`;
  for(let indiceColumnas = 1; indiceColumnas <= columnas; indiceColumnas++){
      tabla += `<td>${celda--}</td>`;
      //es lo mismo que poner: celda = celda - 1
  }
  tabla += `</tr>`;
}

tabla += `</tbody></table>`;
pantalla.innerHTML = tabla;
/*
Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/
let letra = ""
while (true) {
    numero = parseInt(prompt("Ingrese su DNI"));
    if (numero - numero === 0 && 0 < numero && numero < 99999999) {
        resto = numero % 23
        
        switch (true) {
            case resto === 0:
                letra = 'T'
                break;
            case resto === 1:
                letra = 'R'
                break;
            case resto === 2:
                letra = 'W'
                break;
            case resto === 3:
                letra = 'A'
                break;
            case resto === 4:
                letra = 'G'
                break;
            case resto === 5:
                letra = 'M'
                break;
            case resto === 6:
                letra = 'Y'
                break;
            case resto === 7:
                letra = 'F'
                break;
            case resto === 8:
                letra = 'P'
                break;
            case resto === 9:
                letra = 'D'
                break;
            case resto === 10:
                letra = 'X'
                break;
            case resto === 11:
                letra = 'B'
                break;
            case resto === 12:
                letra = 'N'
                break;
            case resto === 13:
                letra = 'J'
                break;
            case resto === 14:
                letra = 'Z'
                break;
            case resto === 15:
                letra = 'S'
                break;
            case resto === 16:
                letra = 'Q'
                break;
            case resto === 17:
                letra = 'V'
                break;
            case resto === 18:
                letra = 'H'
                break;
            case resto === 19:
                letra = 'L'
                break;
            case resto === 20:
                letra = 'C'
                break;
            case resto === 21:
                letra = 'K'
                break;
            case resto === 22:
                letra = 'E'
                break;
            default:
                break;
            }
            console.log(`A su DNI ${numero} le corresponde la letra ${letra}`)
        
    } else {
        alert("Intentalo nuevamente");
    }
}

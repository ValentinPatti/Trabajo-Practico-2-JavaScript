/*
Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
1
2
3
4 (Múltiplo de 4)
5-
————————————————————-
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/

for (let contador = 1; contador <= 500; contador++) {
    let mensaje = contador;

    if (contador % 4 === 0) {
        mensaje += '(Múltiplo de 4)'
    }
    if (contador % 9 === 0) {
        mensaje += '(Múltiplo de 9)'
    }
    console.log(mensaje)

    if (contador % 5 === 0) {
        console.log('--------------------------------------')
    }
}

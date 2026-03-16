//Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const texto = prompt('Ingresa el texto')
let invertida = ""

for (let i = 0; i <= texto.length; i++) {
    invertida += texto.charAt(texto.length-i)
}
console.log(invertida)
// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function infoTexto(texto) {
    if (texto === texto.toUpperCase()) {
        document.write("El texto ingresado esta integrado solo por mayúsculas")
    } else if (texto === texto.toLowerCase()) {
        document.write("El texto ingresado esta integrada solo por minúsculas")
    } else{
        document.write("El texto ingresado esta integrado de mayúsculas y minúsculas")
    }
}

infoTexto("Texto de prueba para la Funcion")
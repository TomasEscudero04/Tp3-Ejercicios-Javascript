// 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

function Par(numero) {
    numero = parseInt(prompt("Ingrese un numero"))

    if ((numero % 2) === 0) {
        document.write("El numero ingresado es par")
    } else{
        document.write("El numero ingresado es impar")
    }
}

Par();
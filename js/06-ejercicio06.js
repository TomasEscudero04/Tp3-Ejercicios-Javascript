// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

let numero1 = parseInt(prompt("Ingrese el largo del rectangulo en"))
let numero2 = parseInt(prompt("Ingrese el ancho del rectanguloen"))

function calcPerimetro() {
    let perimetro = 2 * (numero1 + numero2);
    return document.write(`El perimetro del rectangulo es de ${perimetro}`)
}


calcPerimetro();
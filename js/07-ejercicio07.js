// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.


function tablaMultiplicar(numero) {
    
    if (isNaN(numero)) {
        document.write("<p>Por favor, ingresa un numero valido</p>");
        return
    }

    document.write(`<table border="1" cellspacing="0" cellspadding="5">
        <thead>
            <tr>
                <th colspan="2">Tabla de multiplicar del numero ${numero}</th>
            </tr>
        </thead>
        <tbody>`);

        for (let i = 1; i <= 10; i++) {
            document.write(`
                <tr>
                    <td>${numero} * ${i}</td>
                    <td>${numero * i} </td>
                </tr>`);
        }

        document.write(`
            </tbody>
            </table>`)
}

let number = parseInt(prompt("Ingrese el numero que desea ver la tabla de multiplicar"));

tablaMultiplicar(number);
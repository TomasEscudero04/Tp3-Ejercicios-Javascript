// 2- Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// Mostrar la longitud del arreglo.
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// Añade en última posición la ciudad de París.
// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

let cities = [];
let exit = true;

do{
    let city = prompt("Ingrese una ciudad o presione 0 para salir del programa").trim();

    if(city === null || city === "0" || city === undefined) {
        exit = false;
    } else if(city !== ""){
        cities.push(city);
        console.log(city);
    }
} while(exit);


document.write(`<p>El arreglo de ciudades tiene ${cities.length} elementos</p>`)

document.write("<ul>")

if(cities.length >= 1){
    document.write(`<li>Elemento en la 1era posicion: ${cities[0]} </li>`)
} else{
    document.write("No existe un elemento en la 1era posicion")
}

if(cities.length >= 3){
    document.write(`<li>Elemento en la 3era posicion: ${cities[2]} </li>`)
} else{
    document.write("No existe un elemento en la 3era posicion")
}

if(cities.length >= 1){
    document.write(`<li>Elemento en la ultima posicion: ${cities[cities.length -1]} </li>`)
} else{
    document.write("No existe un elemento en la ultima posicion")
}
document.write("</ul>")

cities.push("Paris");


document.write("<ul>")

if(cities.length >= 2){
    document.write(`<li>Elemento en la 2da posicion: ${cities[1]} </li>`)
} else{
    document.write("No existe un elemento en la 2da posicion")
}
document.write("</ul>")
console.log(cities);

if(cities.length >= 1){
    cities[1] = "Barcelona"
}


document.write("<h1>Arreglo de ciudades</h1>")
document.write("<ol>")

cities.forEach(city => {
    document.write(`<li>${city}</li>`)
})
document.write("</ol>")
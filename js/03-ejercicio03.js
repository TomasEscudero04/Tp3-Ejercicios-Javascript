// 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

let sumas = [];

for (let i = 0; i < 50; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    
    sumas.push(dado1 + dado2)
}


sumas.forEach((suma, index) => {
    console.log(`Tirada n°${index + 1} // Suma:${suma}`);
    
})

let sumasUnicas = [];
let ocurrencias = [];
for (let i = 0; i < sumas.length; i++) {
    let suma = sumas[i];
    
    let index = sumasUnicas.indexOf(suma);

    if(index === -1){
        sumasUnicas.push(suma);
        ocurrencias.push(1);
    } else{
        ocurrencias[index]++
    }
}

document.write(`<br><br> Sumas unicas: ${sumasUnicas}`)

document.write(`<br> Ocurrencias por suma: ${ocurrencias}`)
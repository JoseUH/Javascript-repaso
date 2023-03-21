// scope 
let fruta = "pera";

function global() {
    console.log(`en la funcion ${fruta}`);
}
global()

// esta como es una variable que esta fuera de funciones y bucles existe de maneral global

function local() {
    let comida = "panchitos"
    console.log(`en la funcion ${comida}`);
}

local()
// esto no funciona por que es un variable local que se aloja en este caso dentro de la función y no existe fuera de ella, dentro sí

// console.log(comida);

// si yo quiero disponer de esta variable fuera para hacer lo que sea, simplemente tendria que retornarla con return

const frutas  = ["pera","manzana","tomate"]

for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
}
// esto no funciona por que es un variable local que se aloja en este caso dentro de la función y no existe fuera de ella, dentro sí
// console.log(fruta, i);

let resultado = 0
function contador() {
    if (resultado===1) {
        resultado++
    }else{
        resultado--
    }
    console.log("esto es lo que esta dentro de la funcion",resultado);
}
contador()
console.log(resultado);



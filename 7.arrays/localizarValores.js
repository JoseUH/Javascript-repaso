// metodos para localizar valores
const comida = ["patata","pera","lechuga","manzana","limon","lechuga"]

//INDEXOF -> devuelve la posición del primer elemento que coincida con el paramtero.
// si el elemento no se encuentra devuelve -1

const indexOfLechuga= comida.indexOf("lechuga")
console.log(indexOfLechuga);


//LastIndexOF -> devuelve el indice del ultimo elemento que coincida con el parametro . si no encuentra el elemento me devuelve -1

const lastIndexOfLechuga = comida.lastIndexOf("lechuga")
console.log(lastIndexOfLechuga);

//Includes -> devuelve un valor booleano si el elemento coincide con el parametro

console.log(comida.includes("lechuga"));
console.log(comida.includes("martini"));

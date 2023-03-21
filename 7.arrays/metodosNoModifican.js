// metodos que no modifican

const heroes = ["Batman", "Superman", "Aquaman", "WonderWoman"];
const villanos = ["Darkseid", "Luthor", "Hades", "Joker"]

// Concat-> concatena dos arrays y genera uno nuevo, respetando los originales

const personajes = heroes.concat(villanos)
console.log("concat", personajes);

//Join - devuelve un string con los elementos del array y el parametro que le metemos sera el separador

const heroesJoin = heroes.join(" ")
console.log("despues del join", heroesJoin);

//Slice - este es el primo del splice pero no modifica nuestro array original, solo sirve para obtener cierta información. Este metodo tiene por parametro 1º la posición donde empeiza y el segungdo parametro la posición donde acaba sin incluir el ultimo elemento

const heroesSLice = heroes.slice(1,3)
console.log(heroesSLice);


//tostring - convierte a la bruto un array en un string. no admite parametros

const heroesToString = heroes.toString()
console.log(heroesToString);

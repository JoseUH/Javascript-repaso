// metodos que modifican el array

const guardianes = ["Rocket", "Starlord", "Gamora", "Drax"];
console.log("este es el array original ", guardianes);

// POP() -> eliminar el ultimo elemento de un array
guardianes.pop()
console.log("este es el array despues del pop ", guardianes);

//PUSH()-> añade un elemento al array en la ultima posición

guardianes.push("Jose Maria","Zorahida")
console.log("este es el array despues del push ", guardianes);

//REVERSE() -> invierte el sentido del array
guardianes.reverse()
console.log("este es el array despues del reverse ", guardianes);

//SHIFT() elimina el primer elemento de un array

guardianes.shift();
console.log("este es el array despues del shift ", guardianes);

//SORT() ordena los elementos de un array por orden alfabetico

guardianes.sort()
console.log("este es el array despues del sort ", guardianes);

// ordenar de como ordenar numericamente

const numeros = [2,24,1,3,4,5,7,78,2]

numeros.sort(function (a,b) {
    return a - b
});
console.log(numeros);

//SPLICE - elimina elementos. El primer parametrso represetna el indice donde tiene que empezar a modificar nuestro array, el segundo parametro es el numero HUMANO que no la posición a partir de la que tiene que eliminar. En el tercer parametro puede añadirlo en el hueco que queda lo que yo quiera

guardianes.splice(1,2,"thor","groot")
console.log("despues del splice(1,2)",guardianes);


//Unshift - añade todo lo que le metamos por paramtro al principio del array

guardianes.shift("mantis")
console.log("Despues del unshift", guardianes);
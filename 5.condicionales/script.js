// condicionales

// glosario

// mayor que -> >
// mayor o igual que -> >=
// menor que -> <
// menor o igual que <=
//igual que -> ==
//no es igual -> !=
// estrictamente igual -> ===
// estrictamente no es igual -> !==

const age = 17;
//IF si se cumple la condición

// aqui no se cumple la condición por tanto no me muestra el console.log
if (age >= 18) {
    console.log("puedes conducir");
}

//Else , si x no se cumple

if (age >= 18) {
    console.log("puedes conducir");
} else {
  console.log("no puedes conducir");
}
// Else if -> y si

const comida = "galletas"

// const comida = "perritos"

if (comida ==="bocadillo") {
    console.log(" en el carrefour no venden bocadillos");
}else if(comida ==="panini") {
     console.log("sigue sin haber esto en el carrefour");
}else if (comida === "galletas"){
       console.log(" de esto si que tienen");
}else {
    console.log(" no se que estas buscando");
}

// ternario

const nombre = "Antonio";

const resultadoTernario = 
 // esto se traduce si nombre es estrictamente igual a antonio
  nombre ==="Antonio" ?
  // la interrogación es como si estuvieramos poniendo una llave en cualquier if normal, la variable pasa a setear su valor con asi me llamo
 "Asi me llamo" :
 // y si no cumple la condición que son los dos puntos, me seteas el valor con esto
  "Asi no me llamo"

console.log(resultadoTernario);

//megaTernario

const edad = 89
const resultadoEdad = 
edad >90 
? "Madre mia que mayor"
: edad >100
? "eres centenaria"
: "no se que edad tienes"

console.log(resultadoEdad);


//Negación

const delincuente = "Jose Maria";

if (delincuente!== "Jose Maria") {
    console.log("vas a formar parte del club de Jose");
}else {
    console.log("Jose maria es el mas famoso");
}

///////////////
const nombrecito = "Pepe"

// esto es lo mismo que si pusiera si nombrecito == true
if (nombrecito) {
    console.log("nombrecito existe");
}else{
    console.log("nombrecito no existe");
}





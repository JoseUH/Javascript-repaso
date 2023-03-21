// operadores logicos

// O -> Or //
const tengoEfectivo = false;
const tengoTarjeta = true;

// const puedopagar = si tengo efectivo o si tenga tarjeta, si una de las dos se cumple la condición es true
const puedoPagar= tengoEfectivo || tengoTarjeta

console.log(puedoPagar);

// Y -> And -> &&

const tengoCoche = false;
const tengoCarnet = true;

// const puedo conducir = si tengo carnet y tengo coche
const puedoConducir  = tengoCoche && tengoCarnet;

console.log(puedoConducir);

//Not -> no -> !

const valor = !true
console.log(valor);
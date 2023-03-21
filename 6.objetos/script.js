// objetos
const coche =  { // es constante porque no puede dejar de ser un objeto y asi lo bloqueamos, pero si podemos modificar su información interior
    color:"rojo",
    ruedas:4,
    marca: "opel",
    itv:true

}
console.log(coche);

// vamos a acceder al valor del objeto
 console.log(coche.color);
 console.log(coche["color"]);


 // vamos a modificar/setear  el valor de color

 coche.color = "azul";

 console.log(coche);

 // si llamamos a una propiedad que no existe ,  me la va a añadir

 coche.puertas = 5;
 console.log(coche);
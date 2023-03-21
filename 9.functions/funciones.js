// funciones

function saludador() {
     console.log("hola");
}
saludador()


function saludadorConNombre(nombre) {
  console.log(`Hola ${nombre}`);    
}

saludadorConNombre("Jose")
saludadorConNombre("Benito")

function saludadorNombreCompleto(nombre,apellidos) {
    console.log(`Hola ${nombre} ${apellidos}`);
}

saludadorNombreCompleto("Benito","Perez")


function saludadorEdad(born=1993,actualYear=2023) {
    const year = actualYear -born
    console.log(`tienes ${year}`);
}

saludadorEdad(1991,2100)

function saludar(nombre) {
    return nombre
}
const nombre = saludar("benito")
console.log(nombre);



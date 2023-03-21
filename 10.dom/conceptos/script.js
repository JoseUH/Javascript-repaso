//Document: el nodo principal, es todo el documento de html
//element: son lo que esta definido por etiquetas de apertura y cierra, lo que viene siendo una etiqueta
 

// los dolares los pongo como buenas practicas por el que vea mi variable sepa que estoy haciendo referencia a un elemento de html, un nodo

// aqui estoy cogiendo mi elemento h1 y lo tengo que ver en mi consola del navegador

// en estos casos estoy cogiendo un elemento con etiqueta x, eJ:h1 , p , un array de ps


const myTitle$$ = document.querySelector("h1")

console.log(myTitle$$);


//query selector

//*****etiqueta******

// en este variable cojo la eitqueta, simplemente miro si es una p y el primer elemento p me lo coge si se repiten mas elementos con esta etiqueta

const myP$$ = document.querySelector("p")

console.log(myP$$);


// en esta variable estoy cogiendo todas mis p, por lo que se convierte en un array

const myPs$$ = document.querySelectorAll("p")
console.log(myPs$$);

//*****clase******

// en esta variable estoy cogiendo mi p que tiene en el html una class llamada clase, por tanto lo llamo con punto

// const myClassP$$ = document.getElementsByClassName("clase")

const myClassP$$ = document.querySelector(".clase")
console.log(myClassP$$);

const myClassPs$$ = document.querySelectorAll(".clase")
console.log(myClassPs$$);

//*****id******

// en esta variable estoy cogiendo mi p que tiene en el html un id llamado idDeP por lo tanto lo llamare con el asterisco

const myIdP$$ = document.querySelector("#idDeP")
console.log(myIdP$$);




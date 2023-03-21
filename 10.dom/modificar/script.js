const myH1$$ = document.querySelector("h1")

// en estos dos casos estamos modificando su texto anteriors

myH1$$.textContent="Hola, te acabo de cambiar el titulo"

const myH1Class$$ = document.querySelector(".miH1")

// console.log(myH1Class$$);
myH1Class$$.innerText= "esto es el innerText"

// vamos a modificar y añadirle una clase a mi primer h1 que no tenia clase

myH1$$.className="miNuevaClase"
console.log(myH1$$);

//****crear elementos dinamicamente *****/

//vamos a crear un elemento que en este caso elemento ul

const myUl$$ = document.createElement("ul")

// en esta linea estamos metiendo dentro de nuestro que es document , dentro del body vamos a meter un hijo que este caso es lo que hemos creado en la linea anterior, esto me lo mete siempre al final de todo el body da igual lo que tenga el body

document.body.appendChild(myUl$$)

const myLi$$ = document.createElement("li")
myLi$$.textContent="este es mi li"
// meto dentro de mi padre que es ul , un hijo que myLi$$

myUl$$.appendChild(myLi$$)


// crear elemento mediante innerhtml

const miDiv$$= document.querySelector("div")
miDiv$$.innerHTML=` 
<ul>
    <li class="miPrimerLi">a</li>
    <li>b</li>
    <li>c</li>
    <li>d</li>
</ul>`




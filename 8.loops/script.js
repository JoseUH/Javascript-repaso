// bucles

const usuarios = [
    { name: "Abel", years: 43 },
    { name: "Maria", years: 18 },
    { name: "Pedro", years: 14 },
    { name: "Samantha", years: 32 },
    { name: "Raquel", years: 16 },
  ];
  
  //For

  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];
    console.log("bucle for",usuario); 
  }

  //For of

  for (const usuario of usuarios) {
    console.log("bucle forOf",usuario);
  }

  //for each- por cada uno de los elementos de un arraya va a ejecutar x

  usuarios.forEach((usuario,index)=> {
    console.log("bucle forEach",usuario,index);
  })

  const coche =  { 
    color:"rojo",
    ruedas:4,
    marca: "opel",
    itv:true
}

for (const key in coche) {
    
    const valor = coche[key]
    console.log(`Tengo la clave ${key} con valor ${valor}`);
    
}

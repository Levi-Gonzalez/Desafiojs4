// Saludo al usuario
const nodo = document.getElementById ("bienvenido");
const nombre = prompt("ingrese su nombre");

nodo.innerHTML = `¡Bienvenid@, ${nombre}!`;
// funcion de mi sitio
function uefa()
{
    const tituloH1 = document.createElement("h1");
    tituloH1.innerHTML="UEFA CHAMPIONS LEAGUE";
    // titulo
    tituloH1
    document.body.appendChild(tituloH1);
    // estilo de titulo
    tituloH1.setAttribute("style","text-align:center");
} 
uefa()
// Creamos un nodo de tipo de elemento "P"
let parrafo =document.createElement ("p")
parrafo.innerHTML="<h2>TABLA DE POSICIONES</h2>"
parrafo.setAttribute("style","text-align:center");

document.body.append(parrafo);

// plantilla y recorrido de clubes.
const equipos = [{posicion: 1, club: "Barcelona", puntos: 12},
                 { posicion: 2, club: "Real Madrid", puntos: 11},
                 { posicion: 3, club: "Manchester United", puntos: 10},
                 { posicion: 4, club: "PSG", puntos: 9},
                 { posicion: 5, club: "Manchester City", puntos:8},
                 { posicion: 6, club: "Liverpool", puntos:7 }];
                 
for (const equipo of equipos ) {
    let contenedor = document.createElement("div")
    contenedor.innerHTML = ` <h2> posicion: ${equipo.posicion}</h2>
                             <h3>equipo: ${equipo.club}</h3>
                             <h3>ptos ${equipo.puntos}</h3>`

    document.body.appendChild(contenedor)

    contenedor.setAttribute("style","text-align:center","color:red");
    

}


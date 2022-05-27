const escudo = document.getElementById("escudo");

const data = [
  {
    id: 1,
    titulo: "Barcelona",
    imagen:
    "https://www.sopitas.com/wp-content/uploads/2020/05/escudo-barcelona-historia-significado.png"  },
  {
    id: 2,
    titulo: "Real Madrid",
    imagen:
  "https://www.sopitas.com/wp-content/uploads/2020/06/real-madrid-escudo-significado-corona-sin-cruz.png"  },
  {
    id: 3,
    titulo: "Paris Saint-Germain",
    imagen:
      "http://www.brandemia.org/wp-content/uploads/2013/02/PSG_marca_escudo.jpg",
  },
  {
    id: 4,
    titulo: "Manchester United",
    imagen:
      "https://www.futbolsapiens.com/wp-content/uploads/2020/08/Manchester-United-logotipo.jpg",
  },
  {
    id: 5,
    titulo: "Manchester City",
    imagen:
      "https://www.futbox.com/img/v1/0c6/534/793/2da/d1972bbd5460343ca646.png",
  },
  {
    id: 6,
    titulo: "Atletico de Madrid",
    imagen: "http://2.bp.blogspot.com/_5aoxzAmxfp4/SLgEKP-PWhI/AAAAAAAAArg/J4Cl-vMYjL8/s400/zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz.png",
  },
];

for (const pelicula of data) {
  escudo.innerHTML += `
    <div class="col">
    <div class="card" >
      <img src="${pelicula.imagen}"  class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${pelicula.titulo}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  `;
}
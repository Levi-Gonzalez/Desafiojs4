// Botón 1
const elementoA = document.getElementById("elementoA");
	elementoA.addEventListener('click' ,() =>{
	console.log ('click')
	});
// _______________________________________________________________

// cambio de color en la caja
const caja = document.getElementById("caja");

	caja.addEventListener("mouseenter" , () => {
		caja.classList.add("green")
	});
	caja.addEventListener("mouseleave" ,() =>{
		caja.classList.remove("green")
	});
//________________________________________________________________

// Input
const input = document.getElementById ("input")

input.addEventListener ("keydown" , () => {
	console.log("has pulsado una tecla")

});
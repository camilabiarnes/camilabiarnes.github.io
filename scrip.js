const carrito = document.getElementById("carrito");
const elemento1 = document.getElementById("lista-1");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

cargarEventlisterners();

function cargarEventlisterners () {
elemento1.addEventListener("Click" , comprarElemento);

}
// Consultamos el título que aparece en la pestaña del navegador
console.log("El título de esta página es:", document.title);

// Buscamos el título principal para poder modificarlo
let titulo = document.querySelector("#titulopr");

console.log(titulo);
console.log(titulo.textContent);

// Personalizamos el título desde JavaScript
titulo.textContent = "Catálogo de productos tecnológicos";
titulo.style.color = "#245b78";
titulo.style.background = "#dcecf5";
titulo.style.fontSize = "1.5rem";

// Agregamos un texto extra al párrafo principal
let parrafo = document.querySelector("#parrafopr");
parrafo.innerHTML += " Revisa cuáles artículos están disponibles.";

// Mostramos un mensaje de acuerdo con el presupuesto ingresado
let caja1 = document.querySelector("#caja1");
caja1.innerHTML += "<p>Revisión del presupuesto de compra</p>";

let presupuesto = prompt("Introduce tu presupuesto disponible");

if (presupuesto >= 1200) {
    caja1.classList.add("aprobado");
    caja1.innerHTML += "<p>Tu presupuesto es suficiente.</p>";
} else {
    caja1.classList.add("no-aprobado");
    caja1.innerHTML += "<p>Tu presupuesto es menor a $1,200.</p>";
}

// Productos registrados en la tienda
const bodega = [
    {nombre: "Laptop", precio: 12500, stock: 4},
    {nombre: "Teclado gamer", precio: 850, stock: 6},
    {nombre: "Mouse inalámbrico", precio: 320, stock: 0},
    {nombre: "Bocinas Bluetooth", precio: 690, stock: 8},
    {nombre: "Memoria USB", precio: 180, stock: 12}
];

// Seleccionamos el espacio donde aparecerán los productos
let caja = document.querySelector(".caja-vacia");

// Recorremos el inventario y mostramos cada producto
bodega.forEach(item => {
    let clasecolor = "";

    if (item.stock > 0) {
        clasecolor = "aprobado";
    } else {
        clasecolor = "no-aprobado";
    }

    caja.innerHTML += `
    <div class="cajaproducto ${clasecolor}">
        <h2>Producto: ${item.nombre}</h2>
        <p>Precio: $${item.precio}</p>
        <p>Existencias: ${item.stock}</p>
        <p>${item.stock > 0 ? "Disponible" : "Agotado"}</p>
    </div>
    `;
});

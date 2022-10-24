import { generarCards, eventoAgregarProducto } from "./funciones.js";


let categoria = localStorage.getItem("categoria")
let arrayProductos = JSON.parse(localStorage.getItem("arrayProductos")) || []

let busqueda;
switch (categoria) {
    case "indumentaria":
        busqueda = arrayProductos.filter(el => el.categoria == "indumentaria")
        console.log(busqueda);
        generarCards(busqueda)
        eventoAgregarProducto(busqueda)

        break;
    case "accesorios":
        busqueda = arrayProductos.filter(el => el.categoria == "accesorios")
        console.log(busqueda);
        generarCards(busqueda)
        eventoAgregarProducto(busqueda)

        break;
    case "higiene":
        busqueda = arrayProductos.filter(el => el.categoria == "higiene")
        console.log(busqueda);

}

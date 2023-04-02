const productos = [
    //hoodies
    {
        id: "nntnd",
        titulo: "nintendo hoodie",
        imagen: "./img/hoodies/nintendohoodieBack.png",
        categoria: {
            nombre: "Hoodies",
            id: "hoodies"
        },
        precio: 1899.99
    },
    {
        id: "pnlss",
        titulo: "painless hoodie",
        imagen: "./img/hoodies/painlesshodieeBack.png",
        categoria: {
            nombre: "Hoodies",
            id: "hoodies"
        },
        precio: 1299.99
    },
    {
        id: "rndm",
        titulo: "rndm xclsv",
        imagen: "./img/hoodies/rndmhoodie.png",
        categoria: {
            nombre: "Hoodies",
            id: "hoodies"
        },
        precio: 799.99
    },
]

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {

    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

}

cargarProductos();
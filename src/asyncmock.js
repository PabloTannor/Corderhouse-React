const productos = [
    {
        id: "1",
        titulo: "He-Man",
        imagen: "../heman/1.jpg",
        idCat: "1",
        precio: 20000

    },
    {
        id: "2",
        titulo: "Skeletor",
        imagen: "../heman/2.jpg",
        idCat: "1",
        precio: 20000

    },
    {
        id: "3",
        titulo: "He-Man",
        imagen: "../heman/3.jpg",
        idCat: "1",
        precio: 20000

    },
    {
        id: "4",
        titulo: "He-Man",
        imagen: "../heman/4.jpg",
        idCat: "1",
        precio: 20000

    }, {
        id: "5",
        titulo: "He-Man",
        imagen: "../heman/5.jpg",
        idCat: "1",
        precio: 20000

    },
    {
        id: "6",
        titulo: "He-Man",
        imagen: "../heman/6.jpg",
        idCat: "1",
        precio: 20000

    },
    {
        id: "7",
        titulo: "He-Man",
        imagen: "../heman/7.jpg",
        idCat: "1",
        precio: 20000

    },
    {
        id: "8",
        titulo: "Trap-Jaw",
        imagen: "../heman/8.jpg",
        idCat: "1",
        precio: 20000

    },

    /*----*/

    {
        id: "9",
        titulo: "Miguel Angel",
        imagen: "../tortugas/1.jpg",
        idCat: "2",
        precio: 20000

    },
    {
        id: "10",
        titulo: "Leonardo",
        imagen: "../tortugas/2.jpg",
        idCat: "2",
        precio: 20000

    },
    {
        id: "11",
        titulo: "Raphael",
        imagen: "../tortugas/3.jpg",
        idCat: "2",
        precio: 20000

    },
    {
        id: "12",
        titulo: "Donatello",
        imagen: "../tortugas/4.jpg",
        idCat: "2",
        precio: 20000

    }, {
        id: "13",
        titulo: "Splinter",
        imagen: "../tortugas/5.jpg",
        idCat: "2",
        precio: 20000

    },
    {
        id: "14",
        titulo: "Roccoso",
        imagen: "../tortugas/6.jpg",
        idCat: "2",
        precio: 20000

    },
    {
        id: "15",
        titulo: "Shredder",
        imagen: "../tortugas/7.jpg",
        idCat: "2",
        precio: 20000

    },
    {
        id: "16",
        titulo: "Villano",
        imagen: "../tortugas/8.jpg",
        idCat: "2",
        precio: 20000

    },

]

export const getProductos = () =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(productos);
        },2000)
    })
}

export const getUnProducto = (id) =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            const producto = productos.find(item =>item.id === id)
            resolve(producto);
        },2000)
    })
}

export const getProductosPorCategoria = (idCategoria) =>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            const productosCategoria = productos.filter(item =>item.idCat === idCategoria)
            resolve(productosCategoria);
        },2000)
    })
}


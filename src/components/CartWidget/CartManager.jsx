// const agregarItem = (libro) => {
//     var list = [];
//     console.log("Agregando item al carrito.")
//     let carrito = localStorage.getItem('carrito');
//     if (carrito) {
//         list = JSON.parse(carrito);
//     }
//     list = [...list, libro];

//     localStorage.setItem('carrito', JSON.stringify(list));
// }
const agregarItem = (libro) => {
    console.log("Agregando item al carrito.");

    let carrito = localStorage.getItem('carrito');
    let list = [];

    if (carrito) {
        list = JSON.parse(carrito);
        const libroExistente = list.find(item => item.id === libro.id);
        if (libroExistente) {
            libroExistente.cantidad += 1;
        } else {
            list.push({ ...libro, cantidad: 1 });
        }
    } else {
        list.push({ ...libro, cantidad: 1 });
    }
    localStorage.setItem('carrito', JSON.stringify(list));
}


const eliminarItem = (libro) => {
    console.log("Eliminando item del carrito."); // Cambia el mensaje a algo más apropiado

    let carrito = localStorage.getItem('carrito');
    if (carrito) {
        let list = JSON.parse(carrito);
        let newList = list.filter(l => l.id != libro.id);
        localStorage.setItem('carrito', JSON.stringify(newList));
    } else {
        console.log("El carrito está vacío."); // Manejo de errores si el carrito está vacío
    }
}


const verCarrito = () => {
    console.log("Abriendo carrito.")
    var list = [];
    let carrito = localStorage.getItem('carrito');
    if (carrito) {
        list = JSON.parse(carrito);
    }

    return list;
}

export { agregarItem, verCarrito, eliminarItem };
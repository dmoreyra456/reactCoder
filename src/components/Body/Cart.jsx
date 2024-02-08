import { useEffect, useState } from "react";
import Libro from "../Libros/Libro";
import { verCarrito } from '../CartWidget/CartManager'

const Cart = () => {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        setLibros(verCarrito());
    }, []);

    const handleUpdate = () => {
        setLibros(verCarrito());
    }

    return (<>
        <h1>Carrito</h1>
        {libros.map(l => <Libro key={l.id} libro={l} carrito={true} update={handleUpdate} />)}
    </>)
}

export default Cart;
import { useState } from 'react';
import { agregarItem, eliminarItem } from '../CartWidget/CartManager';

function Libro({ libro, carrito, key, update }) {

    const [isCart, setIsCart] = useState(carrito ? carrito : false);
    const handleClickAgregar = () => {
        agregarItem(libro);
    }

    const handleClickEliminar = () => {
        libro.key = key;
        eliminarItem(libro);
        update();
    }
    return (<>
        <div>
            <div>
                <img src={libro.imagen} alt={"imagen-no-cargada"} height="5%" width="5%" />
            </div>
            <div>{`Nombre : ${libro.titulo}`}</div>
            <div>{`Descripcion : ${libro.descripcion}`}</div>
            <div>{`Autor : ${libro.autor}`}</div>
            {
                isCart ?
                    <>
                        <div>
                            Cantidad: {libro.cantidad}
                        </div>
                        <button onClick={handleClickEliminar}>Eliminar</button>
                    </>
                    :
                    <>
                        <button onClick={handleClickAgregar}>Agregar</button>
                    </>
            }
            <br />
        </div>
    </>)
}

export default Libro;
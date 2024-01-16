function Libro({ libro }) {

    return (<>
        <div>
            <div>
                <img src={libro.imagen} alt={"imagen-no-cargada"} height="5%" width="5%"/>
            </div>
            <div>{`Nombre : ${libro.nombre}`}</div>
            <div>{`Descripcion : ${libro.descripcion}`}</div>
            <div>{`Autor : ${libro.autor}`}</div>
            <br />
        </div>
    </>)
}

export default Libro;
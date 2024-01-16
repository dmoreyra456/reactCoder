import Libros from '../../Libros/Libros';
import '../Catalogo/catalogo.css';

function Catalogo() {

    return (<>
        <div className="catalogo">
            <h1>Catálogo</h1>
            <section>Acá podés disfrutar de todos los libros piolas, más bellos de todo el universo.</section>
            <Libros />
        </div>
    </>)
}

export default Catalogo;
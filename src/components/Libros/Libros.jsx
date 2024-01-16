import { useState } from 'react';
import listaLibros from '../Data/datos';
import Libro from './Libro';

function Libros() {

    const [libros, setLibros] = useState(listaLibros());

    // useEffect(() => {
    // }, []);

    return (<>
        <div>
            {
                libros.map(l => <Libro libro={l} />)

            }
        </div>
    </>)
}

export default Libros;
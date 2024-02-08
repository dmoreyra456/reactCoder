import { useEffect, useState } from 'react';
import Libro from './Libro';
import getLibros from '../../services/dbservice';

function Libros() {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        const fetchLibros = async () => {
            const data = await getLibros();
            setLibros(data);
        };

        fetchLibros();
    }, []);

    return (
        <div>
            {libros.map((l) => <Libro key={l.id} libro={l} />)}
        </div>
    );
}

export default Libros;

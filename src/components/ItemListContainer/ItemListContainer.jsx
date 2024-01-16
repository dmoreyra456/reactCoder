import { Route, Routes } from 'react-router-dom';
import Ayuda from '../Body/Ayuda';
import Cart from '../Body/Cart';
import Contacto from '../Body/Contacto';
import Catalogo from '../Body/Catalogo/Catalogo';
import Brand from '../Brand/Brand';

function ItemListcontainer() {

    return (<>

        <Routes>
            <Route index element={<Brand greeting='Bienvenido a la página del Rockstar de la poesía!' />} />
            <Route path="catalogo" element={<Catalogo />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="ayuda" element={<Ayuda />} />
            <Route path="cart" element={<Cart />} />
        </Routes>
    </>)
}

export default ItemListcontainer;
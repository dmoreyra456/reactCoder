import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpeg';
import CartWidget from "../CartWidget/CartWidget";

function Navbar() {

    return (<>
        <div className="container">
            <nav className="nav">
                <div className="nav-brand">
                    <img src={logo} alt="Logo" />
                </div>
                <Link to="catalogo">Catalogo</Link>
                <Link to="contacto">Contacto</Link>
                <Link to="ayuda">Ayuda</Link>
                <Link to="cart"><CartWidget /></Link>
            </nav>
        </div>
    </>)
}

export default Navbar;
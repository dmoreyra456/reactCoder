import CartWidget from "../CartWidget/CartWidget"
import logo from '../../assets/logo.jpeg'

function Navbar() {

    return (<>
        <div className="container">
            <nav className="nav">
                <div className="nav-brand">
                    <img src={logo} alt="Logo" />
                </div>
                <ul>
                    <li><a href="#">Libros</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Ayuda</a></li>
                    <li><a href="#"><CartWidget /></a></li>
                </ul>

            </nav>
        </div>
    </>)
}

export default Navbar;
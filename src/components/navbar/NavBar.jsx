
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

import "./navbar.css"

const NavBar = () => {

    return(
        <div className="nav-bar">
            <Link to="/" className="brand">
            <img src="https://i.pinimg.com/originals/e4/ff/2d/e4ff2dab7bc15971b72f306f4e1b40f8.png" alt="" />
            </Link>
            <ul className="categorias">
                <Link  to="/categoria/buzos"  className="categoria">Buzos</Link>
                <Link  to="/categoria/camperas" className="categoria">Camperas</Link>
                <Link  to="/categoria/remeras" className="categoria">Remeras</Link>
                <Link  to="/categoria/pantalones" className="categoria">Pantalones</Link>
            </ul>
            <CartWidget />
        </div>
    )
}
export default NavBar
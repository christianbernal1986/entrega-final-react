
import CartWidget from "./CartWidget"
import "./navbar.css"

const NavBar = () => {

    return(
        <div className="nav-bar">
            <img style={{width: "150px"}} src="https://i.pinimg.com/originals/e4/ff/2d/e4ff2dab7bc15971b72f306f4e1b40f8.png" alt="" />
            <ul>
                <li>Buzos</li>
                <li>Camperas</li>
                <li>Remeras</li>
                <li>Pantalones</li>
            </ul>
            <CartWidget />
        </div>
    )
}
export default NavBar
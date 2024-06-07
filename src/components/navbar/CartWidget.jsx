import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

import "./cartwidget.css"

const CartWidget = () => {

    const { cantidadTotal } = useContext(CartContext)

    let cantidad = cantidadTotal()
    

    return(
        <Link to="/cart">

        <div className="cart">
            <img src="https://static.vecteezy.com/system/resources/previews/001/504/962/non_2x/shopping-cart-icon-free-vector.jpg" alt="" />
            <p>{ cantidad >=1 && cantidad }</p>
        </div>
        
        </Link>
    )
}
export default CartWidget
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

import "./cart.css"

const Cart = () => {
    const {carrito, vaciarCarrito, borrarProductoPorId, precioTotal } = useContext(CartContext)
  
    if(carrito.length === 0){
        return(
            <div>
                <h2>El carrito esta vacio</h2>
                <Link to="/" ><button>Ver productos</button></Link>
            </div>
        )

    }

  return (

    <div>
        {
            carrito.map((productoCarrito) => (
                <div key={productoCarrito.id} className='card-carrito'>
                    <img src={productoCarrito.imagen}alt="" />
                    <div>
                    <h3>{ productoCarrito.nombre}</h3>
                    <h3>Cantidad:{productoCarrito.cantidad}</h3>
                    <h3>Precio unitario:$ {productoCarrito.precio}</h3>
                    <h3>Precio parcial:$ {productoCarrito.precio * productoCarrito.cantidad}</h3>
                    <button onClick={() => borrarProductoPorId(productoCarrito.id)}>Eliminar</button>
                    </div>
                </div>

            ))
        }
        <h2> total :${precioTotal()}</h2>
        <Link to="/checkout"><button>Continuar con mi compra</button></Link>
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
        <Link to="/"><button>Seguir viendo</button></Link>
    </div>


  )
}

export default Cart
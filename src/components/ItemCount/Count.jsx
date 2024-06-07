import React, { useContext } from 'react'
import "./count.css"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Count = ({ contador,handleClickIncrement,handleClickReduce,handleClickAddToCart,}) => {
  const { carrito} = useContext(CartContext)
  if(carrito.length >= 1){
    return(
      <div>
         <p>Cantidad:{contador}</p>
         <button onClick={handleClickIncrement}>+</button>
        <button onClick={handleClickReduce}>-</button>
        <button onClick={handleClickAddToCart}>Agregar al carrito</button>
        <Link to="/"><button>Seguir viendo</button></Link>
         
       
        <Link to="/cart"><button>Ir al carrito</button></Link>
        
       
        

      </div>
    )
  }
  
    
  return (

    <div>
        <p>Cantidad:{contador}</p>
        <button onClick={handleClickIncrement}>+</button>
        <button onClick={handleClickReduce}>-</button>
        <button onClick={handleClickAddToCart}>Agregar al carrito</button>
        <Link to="/"><button>Seguir viendo</button></Link>
    </div>

  )
}

export default Count
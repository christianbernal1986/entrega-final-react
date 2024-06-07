import React from 'react'
import { useState } from 'react'
import Count from './Count'

const ItemCount = ({stock, addProduct}) => {
    //hook de estado 
    const [contador, setContador] = useState(1)

    //let contador = 0 

    const handleClickIncrement = () => {
        if(contador < stock){
           setContador(contador  + 1) 
        }
        
    }
    const handleClickReduce = () => {
        if (contador > 1 ){
           setContador( contador - 1)
        }
       
    }
    const handleClickAddToCart = () => {
        addProduct(contador)
    

    }


  return (


    <div>
        <Count contador={contador} handleClickIncrement={handleClickIncrement} handleClickReduce={handleClickReduce} handleClickAddToCart={handleClickAddToCart}/>
        
    </div>
  )  
}

export default ItemCount

import { createContext, useState } from "react";

const CartContext= createContext()

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const añadirProducto = (nuevoProducto) => {
        const condicion = estaEnElCarrito(nuevoProducto.id)
        if(condicion){
            //como el producto ya esta en el carrito entonces lo sumamos
         const productosModificados = carrito.map((productoCarrito) => {
            if(productoCarrito.id === nuevoProducto.id){
                return { ...productoCarrito, cantidad: productoCarrito.cantidad + nuevoProducto.cantidad }
            }else{
                return productoCarrito
            }
         })
         setCarrito(productosModificados)

        }else{
            //agragar el producto como uno nuevo

            setCarrito([...carrito, nuevoProducto])

        }
        
        
    }

    const cantidadTotal = () => {
        const cantidadTotalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0 )
        return cantidadTotalProductos
    }

    const precioTotal = () => {
        const totalCompra = carrito.reduce((total, productoCarrito) => total + (productoCarrito.precio * productoCarrito.cantidad), 0)
         return totalCompra
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }
    //funcion para detectar productos duplicados
    const estaEnElCarrito = (idproducto) => {
        const condicion = carrito.some((productoCarrito) => productoCarrito.id === idproducto)
        return condicion

    }
    //funcion para eliminar un producto especifico

    const borrarProductoPorId = (idproducto) => {
        const productosFiltrados = carrito.filter((productoCarrito) => productoCarrito.id !== idproducto )
        
        setCarrito(productosFiltrados)

    }

    return(
        <CartContext.Provider value={ {carrito, añadirProducto, cantidadTotal, vaciarCarrito, borrarProductoPorId, precioTotal} } >

          { children } 

        </CartContext.Provider>

        
    )
}
export { CartProvider, CartContext }
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./itemdetail.css"

const ItemDetail = ({producto}) => {

    const { añadirProducto } = useContext(CartContext)

    const addProduct = (contador) => {
        //estructuramos el nuevo producto a añadir en el carrito
        const productCart = {...producto, cantidad: contador}
        //usamo la funcion del contex para añadir este producto
        añadirProducto(productCart)

    }
     

    return (
        <div> 
            <div className="detail">
            <img src={producto.imagen} alt="" />
            
            <div className="detail-text">

            <p>{producto.nombre}</p>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <ItemCount stock={producto.stock} addProduct={addProduct} />
            </div>
            </div>

        </div>

    );
};
export default ItemDetail
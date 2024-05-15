import Item from "./Item"
import "./itemlist.css"

const ItemList = ({productos}) => {
    return (
        
     <div>
        <div className="conteiner">

        {
                  
            productos.map((producto) => (
            <Item producto = {producto}/>
            ))
        }
        </div>
     </div>
    )
}
export default ItemList
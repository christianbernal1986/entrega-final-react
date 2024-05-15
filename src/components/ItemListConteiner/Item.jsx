import { Link } from "react-router-dom"
import "./item.css"

const Item = ({producto}) => {
    return (
        <div>
                <div className="conteiner"> 
                    <div className="card" key={producto.id}>
                    <img src={producto.imagen}/>
                    <p>{producto.nombre}</p>
                    <p>{producto.descripcion}</p>
                    <p>precio:${producto.precio}</p>
                    <Link to={"/detail/" + producto.id} >Ver detalles</Link>

                    </div>
                </div>
        </div>
    )
}
export default Item
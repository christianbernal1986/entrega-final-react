import { Link } from "react-router-dom"
import "./item.css"

const Item = ({producto}) => {
    return (
        <div>
            <Link to={"/detail/" + producto.id} >
                <div className="conteiner"> 
                    <div className="card" key={producto.id}>
                    <img src={producto.imagen}/>
                    <p>{producto.nombre}</p>
                    <p>{producto.descripcion}</p>
                    <p>precio:${producto.precio}</p>

                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Item
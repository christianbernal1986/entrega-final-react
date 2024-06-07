import { useEffect,useState } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where} from "firebase/firestore";
import db from "../../db/db.js";
import "./itemlistconteiner.css"

const ItemListContainer = ({saludo}) => {
    const [ productos, setProducts ] = useState([]);
    const [loading, setLoading] = useState(false)
    const { idCategoria } = useParams()

    const getProducts = () => {
        setLoading(true)
        const productsRef = collection (db, "productos")
        getDocs(productsRef)
        .then((productsDb) =>  {

            //formateamos la data de la db

            const data = productsDb.docs.map((producto) => {
                return { id: producto.id , ...producto.data()}

            })
            setLoading(false)
            setProducts(data)
        })
        
    }

    const getProductsByCategory = () => {
        setLoading(true)
        const productsRef = collection(db, "productos")
        const q = query(productsRef, where("categoria", "==", idCategoria))
        getDocs(q)
        .then((productsDb) =>  {

            //formateamos la data de la db

            const data = productsDb.docs.map((producto) => {
                return { id: producto.id , ...producto.data()}

            })
            setLoading(false)
            setProducts(data)
        })
    }

    useEffect(() => {
        
        if(idCategoria){
        getProductsByCategory()
    }else{
        getProducts()
    }
    
       

    },[idCategoria]);

    return (
<div>
<h2>{idCategoria ? `Filtrado: ${idCategoria}`: "Home"}</h2>
{
    loading ? <div className="loading">Cargando...</div> : <ItemList productos = {productos}/>
}
    

  
 
</div>


);
};
export default ItemListContainer 
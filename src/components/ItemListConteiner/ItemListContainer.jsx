import { useEffect,useState } from "react";
import getproducts from "../../data/data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./itemlistconteiner.css"

const ItemListContainer = ({saludo}) => {
    const [ productos, setProducts ] = useState([]);
    const { idCategoria } = useParams()

    useEffect(() => {
        getproducts()
        .then((respuesta) => {
            if(idCategoria){
                //filtrar por categoria
            const productosFiltrados= respuesta.filter((productoRes)=> productoRes.categoria === idCategoria)
            setProducts(productosFiltrados)
            }else{
                //guardar todos los productos
                setProducts(respuesta)
            }
            
    
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            console.log("finalizo la promesa");
        });
    },[idCategoria]);

    return (
<div>
<p>{ saludo } </p>
    

  <ItemList productos = {productos}/>
 
</div>


);
};
export default ItemListContainer
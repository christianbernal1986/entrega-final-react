import { useState,useEffect } from "react"
import getproducts from "../../data/data"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
  const [producto, setProducts] = useState({});
  const { idProducto } = useParams()

useEffect(() => {
    getproducts()
    .then((respuesta) => {
        const productoFind = respuesta.find((productoRes) => productoRes.id === Number(idProducto) );
        setProducts(productoFind);
    }) 
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("finalizo promesa");
    });

},[]);

    return (
        <ItemDetail  producto={producto}/>
    );
};
export default ItemDetailConteiner;
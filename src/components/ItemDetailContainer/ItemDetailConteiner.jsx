import { useState,useEffect } from "react"

import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";

const ItemDetailConteiner = () => {
  const [producto, setProduct] = useState({});
  const { idproducto } = useParams()
  

  const getProduct = () => {
   const productRef = doc(db, "productos", idproducto)
   getDoc(productRef)
   .then((productDb)=> {
     const data = { id: productDb.id, ...productDb.data()}
     setProduct(data)
   })
  }

useEffect(() => {

getProduct()

},[idproducto]);

    return (
        <ItemDetail  producto={producto}/>
    );
};
export default ItemDetailConteiner;
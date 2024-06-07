import React, { useState } from 'react'
import Forrmulario from './Forrmulario'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { addDoc,collection,doc,setDoc ,Timestamp} from 'firebase/firestore';
import { Link } from 'react-router-dom';
import db from '../../db/db.js';
import "./checkout.css"

const Checkout = () => {
    const [ datosForm, setDatosform] = useState({
        nombre:"",
        telefono:"",
        email:""
    });
    const [idOrden, setIdOrden] = useState(null)
    const { carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const handleChageInput = (event) => {
        setDatosform({...datosForm, [event.target.name]: event.target.value })


    };
    const handleSubmitForm = (event) => {
        event.preventDefault()
       //damos formato a los datos a subir
        const orden = {
            comprador: {...datosForm },
            productos: [...carrito ],
            fecha: Timestamp.fromDate(new Date()),
            total: precioTotal(),
        }
        genereteOrder(orden);


    };
      //subimos la orden a firebase
    const genereteOrder = (orden) =>{
        const ordenesRef = collection(db,"ordenes")
        addDoc(ordenesRef,orden)
        .then((respuesta)=> setIdOrden(respuesta.id))
        .catch((error)=> console.log(error))
        .finally(()=> {
            //reducir stock
         updateStock()
            //vaciar el carrito
         vaciarCarrito()
         


        })

    };
    const updateStock = () =>{
        carrito.map((productoCarrito)=> {
            //guardamos la cantidad para luego restar stock
            let cantidad = productoCarrito.cantidad
            //borramos el campo cantidad
            delete productoCarrito.cantidad

            const productoRef = doc(db, "productos", productoCarrito.id)
            setDoc(productoRef,{...productoCarrito, stock: productoCarrito.stock - cantidad})
            .then(() => console.log("stock actualizado"))
            .catch((error)=> console.log(error))
        })


    }

  return (

    <div>
        {
            idOrden ? (
                <div>
                    <h2>Orden generada con exito!</h2>
                    <p>Guarde el id de su orden: {idOrden}</p>
                    <Link to="/"><button className="salir">Salir</button></Link>
                    
                </div>
            ) : (
                <Forrmulario datosForm={datosForm} handleChageInput={handleChageInput} handleSubmitForm={handleSubmitForm}/>

            )}

    </div>

  );
};

export default Checkout
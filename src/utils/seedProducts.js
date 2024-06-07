import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const productos = [
    {
        id: 1,
        nombre: "Buzo canguro",
        descripcion: "Buzo de algodon",
        precio: 15000,
        stock: 5,
        categoria: "buzos",
        imagen: "/image/buzo.JPG"
    },

    {
        id: 2,
        nombre: "Campera impermeable",
        descripcion: "Campera nylon",
        precio: 20000,
        stock: 5,
        categoria: "camperas",
        imagen: "/image/campera.JPG"
    },

    {
        id: 3,
        nombre: "Remera logo estampa",
        descripcion: "Remera de algodon",
        precio: 10000,
        stock: 5,
        categoria: "remeras",
        imagen: "/image/remera.JPG"
    },

    {
        id: 4,
        nombre: "Pantanlon deportivo",
        descripcion: "Pantalon de nylon",
        precio: 18000,
        stock: 5,
        categoria: "pantalones",
        imagen: "/image/pantalon.JPG"
    },
    {
        id: 5,
        nombre: "Buzo canguro",
        descripcion: "Buzo de algodon",
        precio: 15000,
        stock: 5,
        categoria: "buzos",
        imagen: "/image/buzo.JPG"
    },

    {
        id: 6,
        nombre: "Campera impermeable",
        descripcion: "Campera de nylon",
        precio: 20000,
        stock: 5,
        categoria: "camperas",
        imagen: "/image/campera.JPG"
    },

    {
        id: 7,
        nombre: "Remera logo estampa",
        descripcion: "Remera de algodon",
        precio: 10000,
        stock: 5,
        categoria: "remeras",
        imagen: "/image/remera.JPG"
    },

    {
        id: 8,
        nombre: "Pantanlon deportivo",
        descripcion: "Pantalon de nylon",
        precio: 18000,
        stock: 5,
        categoria: "pantalones",
        imagen: "/image/pantalon.JPG"
    },
    {
        id: 9,
        nombre: "Buzo canguro",
        descripcion: "Buzo de algodon",
        precio: 15000,
        stock: 5,
        categoria: "buzos",
        imagen: "/image/buzo.JPG"
    },

    {
        id: 10,
        nombre: "Campera impermeable",
        descripcion: "Campera de nylon",
        precio: 20000,
        stock: 5,
        categoria: "camperas",
        imagen: "/image/campera.JPG"
    },

    {
        id: 11,
        nombre: "Remera logo estampa",
        descripcion: "Remera de algodon",
        precio: 10000,
        stock: 5,
        categoria: "remeras",
        imagen: "/image/remera.JPG"
    },

    {
        id: 12,
        nombre: "Pantanlon deportivo",
        descripcion: "Pantalon de nylon",
        precio: 18000,
        stock: 5,
        categoria: "pantalones",
        imagen: "/image/pantalon.JPG"
    }
]

const seedProducts = () => {
    productos.map(({id,...rest}) =>{
        addDoc(collection(db, "productos"), rest)
    });
}
seedProducts()
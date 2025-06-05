"use client"

import { addDoc, collection } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../firebase/config";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = async (id) => {
        let product = cart.find(item => item.id == id);

        if (product) {
            product.cantidad += 1;
            setCart([...cart]);
        } else {
            const response = await fetch("http://localhost:3000/api/producto/" + id);
            const item = await response.json();
            product = {...item, cantidad:1};
            setCart([...cart, product]);
        }

        console.log("Se agregó el producto: #" + id);
    }

    const deleteItem = (id) => {
        const items = cart.filter(item => item.id != id);
        setCart([...items]);
        console.log("Se eliminó el producto: #" + id);
    }

    const clearCart = () => {
        setCart([]);
        console.log("Se vació el Carrito!");
    }

    const totalItems = () => {
        return cart.reduce((acum, item) => acum += item.cantidad, 0);
    }

    const sumItems = () => {
        return cart.reduce((acum, item) => acum += item.precio * item.cantidad, 0);
    }

    const generateOrder = async (nombre, email, telefono) => {
        const buyer = {nombre, email, telefono};
        const items = cart.map(item => ({id:item.slug, nombre:item.titulo, precio:item.precio, cantidad:item.cantidad}));
        const fecha = new Date();
        const fechaActual = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const order = {buyer:buyer, items:items, date:fechaActual, total:sumItems()};
        const pedidosCollection = collection(db, "pedidos");
        const result = await addDoc(pedidosCollection, order);

        return result.id;
    }

    return <CartContext.Provider value={{cart, addItem, deleteItem, clearCart, totalItems, sumItems, generateOrder}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider
"use client"

import { createContext, useState } from "react";

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

    return <CartContext.Provider value={{cart, addItem, deleteItem, clearCart, totalItems, sumItems}}>
        {children}
    </CartContext.Provider>
}

export default CartContextProvider
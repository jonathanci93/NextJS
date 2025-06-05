"use client"

import { useContext, useState } from "react";
import Boton from "./Boton";
import { CartContext } from "../context/CartContext";
import { useRouter } from "next/navigation";

const ProductDetail = ({item}) => {    
    const {addItem} = useContext(CartContext);
    const [visible, setVisible] = useState(true);
    const router = useRouter();


    const agregarAlCarrito = (id) => {
    addItem(id);
    setVisible(false);
    }
    return (
        <div className="container m-auto flex flex-row my-20">
            <div className="w-1/3 p-5">
                <img src={item.imagen} className="" />
            </div>
            <div className="w-2/3 p-5">
                <h1 className="text-3xl font-black">{item.titulo}</h1>
                <p>{item.descripcion}</p>
                <p className="font-black">${item.precio}</p>
                {visible ? <Boton onClick={() => {agregarAlCarrito(item.id)}} title="Agregar al Carrito">Agregar Al Carrito</Boton> : <Boton onClick={() => {router.replace("/carrito")}} title="Terminar mi Compra">Terminar mi Compra</Boton>} 
            
            </div>

        </div>
    )
}

export default ProductDetail;
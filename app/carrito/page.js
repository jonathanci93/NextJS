"use client"

import { useRouter } from "next/navigation"
import Boton from "../components/Boton";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () => {
    const { cart, clearCart, deleteItem, totalItems, sumItems } = useContext(CartContext);
    const router = useRouter();

    if (totalItems() == 0) {
        return (
            <div className="container m-auto my-20">
                <h1 className="text-3xl font-black">¡El Carrito está vacío!</h1>
                <Boton title={"Volver atrás"} onClick={() => { router.back() }}>Volver atrás</Boton>
            </div>
        )
    }

    return (
        <div className="container m-auto flex flex-col my-20">
            <table>
                <tbody>
                    <tr>
                        <td colSpan={6} className="px-6 py-4 text-end">
                            <Boton onClick={clearCart}>Vaciar Carrito</Boton>
                        </td>
                    </tr>
                    {
                        cart.map(item => (
                            <tr
                                key={item.id}
                                className="bg-white border-b border-gray-300 shadow-sm hover:bg-gray-50 transition-all duration-150"
                            >
                                <td className="px-6 py-4">
                                    <img src={item.imagen} alt={item.titulo} width={80} />
                                </td>
                                <td className="px-6 py-4">{item.titulo}</td>
                                <td className="px-6 py-4">${item.precio}</td>
                                <td className="px-6 py-4">x{item.cantidad}</td>
                                <td className="px-6 py-4 font-semibold">
                                    ${item.precio * item.cantidad}
                                </td>
                                <td className="px-6 py-4">
                                    <Boton onClick={() => deleteItem(item.id)}>Eliminar</Boton>
                                </td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td colSpan={4} className="px-6 py-4"><b>Total a Pagar</b></td>
                        <td className="px-6 py-4"><b>${sumItems()}</b></td>
                        <td className="px-6 py-4 text-end"><Boton onClick={() => {router.replace("/checkout")}}>Checkout</Boton></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Carrito;

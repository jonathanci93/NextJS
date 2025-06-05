"use client"

import { useRouter } from "next/navigation";
import Boton from "../components/Boton";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () => {
    const { cart, clearCart, deleteItem, totalItems, sumItems } = useContext(CartContext);
    const router = useRouter();

    if (totalItems() === 0) {
        return (
            <div className="container mx-auto text-center my-20">
                <h1 className="text-3xl font-black mb-6">¡El Carrito está vacío!</h1>
                <Boton onClick={() => router.back()}>Volver atrás</Boton>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-20 overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    <tr>
                        <th className="px-6 py-3">Imagen</th>
                        <th className="px-6 py-3">Producto</th>
                        <th className="px-6 py-3">Precio</th>
                        <th className="px-6 py-3">Cantidad</th>
                        <th className="px-6 py-3">Subtotal</th>
                        <th className="px-6 py-3 text-end">
                            <Boton onClick={clearCart}>Vaciar Carrito</Boton>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => (
                        <tr key={item.id} className="border-t border-gray-200 hover:bg-gray-50 transition">
                            <td className="px-6 py-4">
                                <img src={item.imagen} alt={item.titulo} width={80} className="rounded-md shadow-sm" />
                            </td>
                            <td className="px-6 py-4">{item.titulo}</td>
                            <td className="px-6 py-4">${item.precio}</td>
                            <td className="px-6 py-4">x{item.cantidad}</td>
                            <td className="px-6 py-4 font-medium">${item.precio * item.cantidad}</td>
                            <td className="px-6 py-4 text-end">
                                <Boton onClick={() => deleteItem(item.id)}>Eliminar</Boton>
                            </td>
                        </tr>
                    ))}
                    <tr className="bg-gray-100 font-semibold">
                        <td colSpan={4} className="px-6 py-4 text-right">Total a Pagar</td>
                        <td className="px-6 py-4">${sumItems()}</td>
                        <td className="px-6 py-4 text-end">
                            <Boton onClick={() => router.replace("/checkout")}>Checkout</Boton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Carrito;


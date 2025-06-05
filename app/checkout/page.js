"use client"

import Boton from "../components/Boton";
import { useRouter } from "next/navigation"
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
    const { cart, clearCart, totalItems, sumItems, generateOrder } = useContext(CartContext);
    const router = useRouter();
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    if (orderId) {
        return (
            <div className="container mx-auto text-center my-20">
                <h1 className="text-3xl font-black mb-4">Gracias por tu Compra!</h1>
                <h3 className="text-xl mb-6">Tu ID de Compra es: <b>{orderId}</b></h3>
                <Boton onClick={() => router.replace("/")}>Ir a la Página Principal</Boton>
            </div>
        );
    }

    if (totalItems() === 0) {
        return (
            <div className="container mx-auto text-center my-20">
                <h1 className="text-3xl font-black mb-6">El Carrito está vacío!</h1>
                <Boton onClick={() => router.back()}>Volver atrás</Boton>
            </div>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = await generateOrder(nombre, email, telefono);
        setOrderId(id);
        clearCart();
    };

    return (
        <div className="container mx-auto flex flex-col md:flex-row gap-10 my-20">
            <form
                onSubmit={handleSubmit}
                method="post"
                className="max-w-md w-full bg-white border border-gray-200 p-6 rounded-xl shadow-md"
            >
                <h1 className="text-3xl font-black mb-6">Generar Orden</h1>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-semibold text-gray-800">Nombre</label>
                    <input
                        type="text"
                        placeholder="Ingrese Nombre"
                        value={nombre}
                        onInput={(e) => setNombre(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-semibold text-gray-800">Email</label>
                    <input
                        type="text"
                        placeholder="Ingrese Email"
                        value={email}
                        onInput={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-semibold text-gray-800">Teléfono</label>
                    <input
                        type="text"
                        placeholder="Ingrese Teléfono"
                        value={telefono}
                        onInput={(e) => setTelefono(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>

                <Boton type="submit">Enviar</Boton>
            </form>

            <div className="overflow-x-auto w-full">
                <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                        <tr>
                            <th className="px-6 py-3">Imagen</th>
                            <th className="px-6 py-3">Producto</th>
                            <th className="px-6 py-3">Precio</th>
                            <th className="px-6 py-3">Cantidad</th>
                            <th className="px-6 py-3">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id} className="border-t border-gray-200">
                                <td className="px-6 py-4">
                                    <img src={item.imagen} alt={item.titulo} width={80} className="rounded" />
                                </td>
                                <td className="px-6 py-4">{item.titulo}</td>
                                <td className="px-6 py-4">${item.precio}</td>
                                <td className="px-6 py-4">x{item.cantidad}</td>
                                <td className="px-6 py-4">${item.precio * item.cantidad}</td>
                            </tr>
                        ))}
                        <tr className="bg-gray-100 font-semibold">
                            <td colSpan={4} className="px-6 py-4 text-right">Total a Pagar</td>
                            <td className="px-6 py-4">${sumItems()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Checkout;

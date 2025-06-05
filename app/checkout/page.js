"use client"

import Boton from "../components/Boton";
import { useRouter } from "next/navigation"
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Checkout = () => {
    const { cart, totalItems, sumItems, generateOrder } = useContext(CartContext);
    const router = useRouter();
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");

    if (totalItems() === 0) {
        return (
            <div className="container m-auto my-20 text-center">
                <h1 className="text-3xl font-bold mb-4">¡El carrito está vacío!</h1>
                <Boton onClick={() => router.back()}>Volver atrás</Boton>
            </div>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const orderId = await generateOrder(nombre, email, telefono);
        console.log("Se creó el carrito con el ID #" + orderId);
    }

    return (
        <div className="container mx-auto flex flex-col gap-12 my-20 px-4">
            {/* Formulario */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-xl shadow border border-gray-200">
                <h1 className="text-3xl font-bold mb-6 text-center">Generar Orden</h1>

                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-800 mb-1">Nombre</label>
                    <input
                        type="text"
                        placeholder="Ingrese nombre"
                        value={nombre}
                        onInput={(e) => setNombre(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-800 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Ingrese email"
                        value={email}
                        onInput={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-1">Teléfono</label>
                    <input
                        type="text"
                        placeholder="Ingrese teléfono"
                        value={telefono}
                        onInput={(e) => setTelefono(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg text-gray-900 border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600"
                    />
                </div>

                <div className="text-center">
                    <Boton type="submit">Enviar</Boton>
                </div>
            </form>

            {/* Tabla de productos */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border border-gray-200 shadow-sm rounded-xl overflow-hidden">
                    <thead className="text-xs uppercase bg-gray-100 text-gray-700">
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
                            <tr key={item.id} className="bg-white border-t">
                                <td className="px-6 py-4">
                                    <img src={item.imagen} alt={item.titulo} className="w-20 h-auto object-contain" />
                                </td>
                                <td className="px-6 py-4 font-medium">{item.titulo}</td>
                                <td className="px-6 py-4">${item.precio}</td>
                                <td className="px-6 py-4">x{item.cantidad}</td>
                                <td className="px-6 py-4 font-semibold">${item.precio * item.cantidad}</td>
                            </tr>
                        ))}
                        <tr className="bg-gray-50 font-semibold">
                            <td colSpan={4} className="px-6 py-4 text-right">Total a pagar:</td>
                            <td className="px-6 py-4">${sumItems()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Checkout;

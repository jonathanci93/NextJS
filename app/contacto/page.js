"use client";

import { useState } from "react";
import Boton from "../components/Boton";

const Contacto = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [consulta, setConsulta] = useState("");
    const [dataForm, setDataForm] = useState("");

    const vaciarCampos = () => {
        setNombre("");
        setEmail("");
        setConsulta("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/api/contacto/", {
            method: "POST",
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({ nombre, email, consulta })
        });
        const data = await response.json();
        setDataForm(data);
        vaciarCampos();
    };

    return (
        <div className="container mx-auto my-20 max-w-lg p-6 bg-white text-gray-800 rounded-2xl shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-center border-b border-red-500 pb-2">
                Contacto
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="nombre" className="block mb-1 text-sm font-medium text-gray-700">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        placeholder="Ingrese su nombre"
                        value={nombre}
                        onInput={(e) => setNombre(e.target.value)}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ingrese su email"
                        value={email}
                        onInput={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>

                <div>
                    <label htmlFor="consulta" className="block mb-1 text-sm font-medium text-gray-700">Consulta</label>
                    <textarea
                        id="consulta"
                        placeholder="Ingrese su consulta"
                        value={consulta}
                        onInput={(e) => setConsulta(e.target.value)}
                        required
                        rows="4"
                        className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>

                <div className="text-center">
                    <Boton type="submit">Enviar</Boton>
                </div>

                {dataForm && (
                    <div className="p-4 mt-4 text-sm text-green-800 bg-green-100 border border-green-300 rounded-lg" role="alert">
                        {dataForm}
                    </div>
                )}
            </form>
        </div>
    );
};

export default Contacto;

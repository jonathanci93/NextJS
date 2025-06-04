"use client"

import Boton from "@/app/components/Boton"
import { AuthContext } from "@/app/context/AuthContext";
import { useContext, useState } from "react"

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [registrar, setRegistrar] = useState(false);
    const { user, logInUser, createUser, googleLogin } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const values = { email, password };
        registrar ? createUser(values) : logInUser(values);
        setError(user.logged ? "" : "Ingrese los datos del Usuario y Contraseña correctamente!");
    }

    const registrarme = () => {
        setRegistrar(true);
    }

    return (
        <div className="container m-auto flex flex-col my-20">
            <form className="max-w-sm mx-auto bg-white p-6 border border-gray-200 rounded-2xl shadow-md" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-5 text-center">{registrar ? "Registrar Usuario" : "Iniciar Sesión"}</h1>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-800">Email</label>
                    <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                        placeholder="Ingrese su Email"
                        required
                        value={email}
                        onInput={(e) => { setEmail(e.target.value) }}
                    />
                </div>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-800">Contraseña</label>
                    <input
                        type="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5"
                        placeholder="Ingrese su Contraseña"
                        required
                        value={password}
                        onInput={(e) => { setPassword(e.target.value) }}
                    />
                </div>

                <div className="mb-3">
                    <Boton type="submit">{registrar ? "Registrar Usuario" : "Iniciar Sesión"}</Boton>
                </div>

                {!registrar && (
                    <div className="mb-3">
                        <Boton onClick={registrarme}>Registrarme</Boton>
                    </div>
                )}

                <div className="mb-1">
                    <Boton onClick={googleLogin}>Registrarme con Google</Boton>
                </div>
            </form>

            {error && (
                <div className="p-4 my-5 text-sm text-red-800 bg-red-100 border border-red-300 rounded-lg text-center" role="alert">
                    <span className="font-medium">Error:</span> {error}
                </div>
            )}
        </div>
    )
}

export default LoginPage;

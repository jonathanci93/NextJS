"use client"

import { useRouter } from "next/navigation";
import Boton from "./components/Boton";
import { useEffect } from "react"

const Error = ({ error, reset }) => {
    const router = useRouter();

    useEffect(() => {
        console.log("error", error);
    }, [error]);

    return (
        <div className="container m-auto flex flex-col my-20 text-center">
            <h1 className="text-2xl font-bold mb-5">Error en la página!</h1>
            <h3 className="mb-6">Por favor, intente en unos minutos!</h3>
            <div className="mx-auto">
                <Boton onClick={() => { router.replace("/") }}>
                    Ir a la página principal
                </Boton>
            </div>
        </div>
    )
}

export default Error;

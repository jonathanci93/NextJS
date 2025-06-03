"use client"

import { useRouter } from "next/navigation"
import Boton from "../components/Boton";

const Carrito = () => {
    const router = useRouter();

    return (
        <div className="container m-auto my-20">
            <h1 className="text-3xl font-black">Carrito</h1>
            <h3 className="text-2xl">Sitio Web en Construcción...</h3>
            <Boton title={"Volver atrás"} onClick={() => {router.back()}}>Volver atrás</Boton>
        </div>
    )
}

export default Carrito
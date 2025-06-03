"use client";
import { useRouter } from "next/navigation";
import Boton from "./components/Boton";


const Error404 = () => {
    const router = useRouter();
        return (
        <div className="container m-auto my-20 text-center alig"> 
            <h1 className="text-2xl font-bold my-2 text-red-600">Error 404</h1>
            <h3 className="my-5">La página solicitada no existe</h3>
            <Boton title={"Volver atrás"} className="text-2xl my-5" onClick={() => {router.replace("/")}}>Volver al inicio</Boton>
        </div>

    )
}

export default Error404;
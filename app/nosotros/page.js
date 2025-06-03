"use client";
import { useRouter } from "next/navigation";
import Boton from "../components/Boton";
const Nosotros = () => {
    const router = useRouter();
    
    return (
        <div className="container m-auto my-20"> 
            <h1 className="text-2xl font-bold my-2 text-red-600">Nosotros</h1>
            <h3 className="my-5">Sitio Web en construcción</h3>
            <Boton title={"Volver atrás"} className="text-2xl my-5" onClick={() => {router.back()}}>Volver atrás</Boton>
        </div>

    )
}

export default Nosotros;
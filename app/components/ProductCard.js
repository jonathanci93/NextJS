"use client"

import { useRouter } from "next/navigation"
import Boton from "./Boton"
import Link from "next/link";

const ProductCard = ({ item }) => {
    const router = useRouter();

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden mx-3">
            <Link href={`/producto/${item.id}`}>
                <img
                    className="w-full h-52 object-contain bg-white"
                    src={item.imagen}
                    alt={item.titulo}
                />
            </Link>
            <div className="p-5">
                <h5 className="mb-2 text-xl font-bold text-gray-800">{item.titulo}</h5>
                <p className="mb-4 text-gray-600 font-semibold">${item.precio}</p>
                <Boton onClick={() => router.replace(`/producto/${item.id}`)}>Ver más</Boton>
            </div>
        </div>
    )
}

export default ProductCard;



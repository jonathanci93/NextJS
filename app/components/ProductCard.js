"use client"

import { useRouter } from "next/navigation"
import Boton from "./Boton"
import Link from "next/link";

const ProductCard = ({item}) => {
    const router = useRouter();

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-3">
            <Link href={"/producto/" + item.slug}>
                <img className="rounded-t-lg p-5" src={item.imagen} alt={item.titulo} />
            </Link>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.titulo}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">${item.precio}</p>
                <Boton onClick={() => {router.replace("/producto/" + item.slug)}}>Ver más</Boton>
            </div>
        </div>
    )
}

export default ProductCard
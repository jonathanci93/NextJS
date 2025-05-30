"use client"

import Link from "next/link";
import mockData from "@/app/data/productos.json"
import { usePathname } from "next/navigation"

const NavigationMenu = () => {
    const categoriasProductos = mockData.map(item => item.categoria);
    const categoriasNombres = new Set(categoriasProductos);
    const categorias = Array.from(categoriasNombres);
    const categoria = usePathname().split("/")[2];

    return (
        <nav className="bg-black">
            <div className="container mx-auto flex justify-center py-4">
                <ul className="flex flex-wrap gap-6 text-sm sm:text-base font-semibold text-white">
                    {
                        categorias.map(item => {
                            const esActiva = item === categoria;
                            return (
                                <li key={item}>
                                    <Link
                                        href={`/productos/${item}`}
                                        className={`transition px-3 py-1 rounded-md 
                                            ${esActiva 
                                                ? "text-red-600 border-b-2 border-red-600" 
                                                : "hover:text-red-500"}
                                        `}
                                    >
                                        {item.toUpperCase()}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavigationMenu;

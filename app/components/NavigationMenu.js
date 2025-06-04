"use client"

import Link from "next/link";
import mockData from "@/app/data/productos.json";
import { usePathname } from "next/navigation";

const NavigationMenu = () => {
    const pathname = usePathname();
    const categoriaActual = pathname.split("/")[2];
    const categorias = Array.from(new Set(mockData.map(item => item.categoria)));

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-4 py-3 flex justify-center">
                <ul className="flex gap-6">
                    {categorias.map((cat) => {
                        const activa = cat === categoriaActual;

                        return (
                            <li key={cat}>
                                <Link
                                    href={`/productos/${cat}`}
                                    className={`uppercase font-semibold text-sm tracking-wide transition-all border-b-2 
                                        ${activa
                                            ? "text-red-600 border-red-600"
                                            : "text-gray-800 border-transparent hover:text-red-600 hover:border-red-600"}`}
                                >
                                    {cat}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default NavigationMenu;




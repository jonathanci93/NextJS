import Boton from "@/app/components/Boton";
import Link from "next/link";

const ListPage = async () => {
    const response = await fetch("http://localhost:3000/api/productos/all");
    const items = await response.json();

    return (
        <div className="container m-auto my-20 px-4">
            <div className="flex justify-end mb-4">
                <Link href="/admin/create">
                    <Boton>Agregar</Boton>
                </Link>
            </div>

            <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full text-sm text-left text-gray-800 bg-white">
                    <thead className="bg-gray-100 text-xs uppercase font-bold border-b border-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3">Imagen</th>
                            <th scope="col" className="px-6 py-3">Título</th>
                            <th scope="col" className="px-6 py-3">Descripción</th>
                            <th scope="col" className="px-6 py-3">Precio</th>
                            <th scope="col" className="px-6 py-3">Categoría</th>
                            <th scope="col" className="px-6 py-3 text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.slug} className="border-b border-gray-200">
                                <td className="px-6 py-4">
                                    <img
                                        src={item.imagen}
                                        alt={item.titulo}
                                        width={80}
                                        className="rounded-md border"
                                    />
                                </td>
                                <td className="px-6 py-4">{item.titulo}</td>
                                <td className="px-6 py-4">{item.descripcion}</td>
                                <td className="px-6 py-4">${item.precio}</td>
                                <td className="px-6 py-4 capitalize">{item.categoria}</td>
                                <td className="px-6 py-4 text-end space-x-2">
                                    <Boton>Editar</Boton>
                                    <Boton>Eliminar</Boton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListPage;




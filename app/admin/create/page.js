"use client"

import Boton from "@/app/components/Boton";
import { db, storage } from "@/app/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react"

const CreateProduct = () => {
    const [titulo, setTitulo] = useState("Banco plano pecho");
    const [descripcion, setDescripcion] = useState("Banco plano pecho, acero inoxidable, perfecto");
    const [precio, setPrecio] = useState(300000);
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("pecho");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const product = {titulo, descripcion, precio, imagen, categoria};
        const productosRef = collection(db, "productos");
        const fileName = imagen.split("\\").pop();
        const storageRef = ref(storage, fileName);       
        const metadata = {contentType:'image/jpg'};    
        const fileSnapshot = await uploadBytes(storageRef, imagen, metadata);
        const fileUrl = await getDownloadURL(fileSnapshot.ref);
        addDoc(productosRef, {...product, imagen:fileUrl});
        console.log("Se agregó el Producto!");
    }

    return (
        <div className="container m-auto my-20 px-4">
            <form className="max-w-md mx-auto bg-white p-6 rounded-xl border border-gray-200 shadow-md space-y-5" onSubmit={handleSubmit} method="post">
                <h1 className="text-3xl font-bold text-center mb-5">Cargar Producto</h1>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Título</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Ingrese Título"
                        value={titulo}
                        onInput={(e) => setTitulo(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Descripción</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Ingrese Descripción"
                        value={descripcion}
                        onInput={(e) => setDescripcion(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Precio</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Ingrese Precio"
                        value={precio}
                        onInput={(e) => setPrecio(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Imagen</label>
                    <input
                        type="file"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Ingrese Imagen"
                        value={imagen}
                        onInput={(e) => setImagen(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Categoría</label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="pecho">Pecho</option>
                        <option value="espalda">Espalda</option>
                        <option value="piernas">Piernas</option>
                    </select>
                </div>

                <Boton type="submit">Enviar</Boton>
            </form>
        </div>
    )
}

export default CreateProduct;



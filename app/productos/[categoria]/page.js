import ProductList from "@/app/components/ProductList";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
    const { categoria } = await params;
    const titulo = categoria === "all" ? "Todos los productos" : categoria;

    return {
        title: `${titulo.toUpperCase()} | Sonnos Equipamiento`,
    };
}

export async function generateStaticParams () {
    return [
        {categoria:"all"},
        {categoria:"pecho"},
        {categoria:"espalda"},
        {categoria:"piernas"}
    ]

}

const Productos = async ({ params }) => {
    const { categoria } = await params;


    return (
        <Suspense fallback={<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 text-center my-20" role="alert">
    <span className="font-medium">Cargando...!</span> 
</div>}>

            <ProductList categoria={categoria} />

        </Suspense>
    );
};

export default Productos;

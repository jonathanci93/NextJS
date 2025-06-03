import ProductList from "@/app/components/ProductList";

export async function generateMetadata({ params }) {
    const { categoria } = await params;
    const titulo = categoria === "all" ? "Todos los productos" : categoria;

    return {
        title: `${titulo.toUpperCase()} | Sonnos Equipamiento`,
    };
}

const Productos = async ({ params }) => {
    const { categoria } = await params;
    

    return (
        <ProductList categoria={categoria}/>
    );
};

export default Productos;

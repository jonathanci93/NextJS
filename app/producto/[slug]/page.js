import ProductDetail from "@/app/components/ProductDetail"

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const response = await fetch("http://localhost:3000/api/producto/" + slug, {cache:"no-store"});
    const item = await response.json();

    return {
        title: `${item?.titulo || "Producto"} | Sonnos Equipamiento`,
    };
}

const Productos = async ({params}) => {   
    const {slug} = await params;
    const response = await fetch("http://localhost:3000/api/producto/" + slug, {cache:"no-store"});
    const item = await response.json();

    return (
        <ProductDetail item={item} />   
    )
}

export default Productos
import mockData from "@/app/data/productos.json"
import ProductDetail from "@/app/components/ProductDetail"

export async function generateMetadata({ params }) {
    const { slug } = params;
    const item = mockData.find(item => item.slug === slug);

    return {
        title: `${item?.titulo || "Producto"} | Sonnos Equipamiento`,
    };
}

const Productos = async ({params}) => {   
    const {slug} = await params;
    const item = mockData.find(item => item.slug == slug);

    return (
        <ProductDetail item={item} />
    )
}

export default Productos
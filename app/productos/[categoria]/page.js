import mockData from "@/app/data/productos.json"
import ProductCard from "@/app/components/ProductCard"

export async function generateMetadata({params, searchParams}, parent) {
    let {categoria} = await params;
    categoria = categoria == "all" ? "Productos" : categoria;

    return {
        title:`${params} - Sonnos Equipamiento`,
    }
}
const Productos = async ({params}) => {   
    const {categoria} = await params;
    const items = categoria == "all" ? mockData : mockData.filter(item => item.categoria == categoria);

    return (
        <section className="container flex flex-row m-auto my-20">
            {
                items.map(item => (
                    <ProductCard key={item.slug} item={item} />
                ))
            }
        </section>
    )
}

export default Productos
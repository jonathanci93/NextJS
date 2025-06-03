import ProductCard from "./ProductCard";

const ProductList = async ({categoria}) => {
    const response = await fetch("http://localhost:3000/api/productos/" + categoria, {cache:"no-store"});
    const items = await response.json();

    return (
        <section className="container flex flex-row m-auto my-20 flex-wrap justify-center gap-6">
            {
                items.map(item => (
                    <ProductCard key={item.slug} item={item} />
                ))
            }
        </section>
    );

}


export default ProductList;
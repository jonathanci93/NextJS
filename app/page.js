import ProductCard from "./components/ProductCard"
import productos from "./data/productos.json"

export default async function Home() {
  return (
    <section className="container flex flex-row m-auto my-20">
      {
          productos.map(item => (
              <ProductCard key={item.slug} item={item} />
          ))
      }
    </section>
  )
}
import NavigationMenu from "./components/NavigationMenu"
import ProductList from "./components/ProductList"

export default async function Home() {
  return (
    <>
      <NavigationMenu/>
      <ProductList categoria={"all"}/>
    
    </>
  )
}
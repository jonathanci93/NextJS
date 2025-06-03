import Boton from "./Boton";

const ProductDetail = ({item}) => {    
    return (
        <div className="container m-auto flex flex-row my-20">
            <div className="w-1/3 p-5">
                <img src={item.imagen} className="" />
            </div>
            <div className="w-2/3 p-5">
                <h1 className="text-3xl font-black">{item.titulo}</h1>
                <p>{item.descripcion}</p>
                <p className="font-black">${item.precio}</p>
                <Boton>Agregar Al Carrito</Boton>
            </div>

        </div>
    )
}

export default ProductDetail;
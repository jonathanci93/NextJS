import { NextResponse } from "next/server"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/app/firebase/config"

export async function GET(response, {params}) {
    const {categoria} = await params;  
    const productosCollection = collection(db, "productos");
    
    // Insertar los productos en Firestore
    /* for (const item of items) {
        await addDoc(productosCollection, item);
    }

    console.log("Productos cargados!"); */

    // Filtrar productos en Firestore por Categoría
    const q = categoria == "all" ? productosCollection : query(productosCollection, where("categoria", "==", categoria));
    const querySnapshot = await getDocs(q);
    let items = querySnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}));

    if (querySnapshot.size == 0) {
        items = "No se encontraron productos!";
    }
    
    return NextResponse.json(items);
}
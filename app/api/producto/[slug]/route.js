import { db } from "@/app/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";


export async function GET (response, {params}) {
    const {slug} = await params;
    const docRef = doc(db,"productos", slug)
    const querySnapshot = await getDoc(docRef);
    
    let item = {id:querySnapshot.id, ...querySnapshot.data()}

    if (!item) {
        item = "No se encontro ningun producto!"
    }
    return NextResponse.json(item)
}   
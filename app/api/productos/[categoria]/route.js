import mockData from "@/app/data/productos.json";
import { NextResponse } from "next/server";

const sleep = (timer) => {
    return new Promise((res) => {
        setTimeout( res,timer);
    })
}

export async function GET (response, {params}) {
    const {categoria} = params;
    let items = categoria == "all" ? mockData : mockData.filter(item => item.categoria == categoria);
    if (items.length == 0) {
        items = "No se encontraron productos!"
    }
    await sleep(2000);
    return NextResponse.json(items)
}
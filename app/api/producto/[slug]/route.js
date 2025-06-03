import mockData from "@/app/data/productos.json";
import { NextResponse } from "next/server";

const sleep = (timer) => {
    return new Promise((res) => {
        setTimeout( res,timer);
    })
}

export async function GET (response, {params}) {
    const {slug} = params;
    let item = mockData.find(item => item.slug == slug);

    if (!item) {
        item = "No se encontro ningun producto!"
    }
    await sleep(2000)
    return NextResponse.json(item)
}   
import { NextResponse } from "next/server";

export async function GET(response) {
    return NextResponse.json("Formulario recibido!");
}

export async function POST(response) {
    const data = await response.json();
    console.log(data);
    
    return NextResponse.json("Los datos se recibieron correctamente!");
}

/* export async function PUT(response) {
    const data = await response.json();
    console.log(data);
    const datos = {
        estado:"PUT",
        data:data
    }
    
    return NextResponse.json(datos);
}

export async function DELETE(response) {
    const data = await response.json();
    console.log(data);
    const datos = {
        estado:"DELETE",
        data:data
    }
    
    return NextResponse.json(datos);
} */
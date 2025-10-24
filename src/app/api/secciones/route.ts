import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/seccions?populate=*`);
    
    if (!res.ok) {
      throw new Error("Error al obtener las secciones");
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "No se pudo conectar con Strapi" }, { status: 500 });
  }
}

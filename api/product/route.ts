import { Prisma, PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const products = await prisma.product.findMany();

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch products" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function POST(request: Request) {
  const { name, description, category } = await request.json();

  try {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        category,
      },
    });

    return new Response(JSON.stringify(product), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create product" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
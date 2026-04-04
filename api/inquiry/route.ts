import { Prisma, PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        message,
      },
    });

    return new Response(JSON.stringify(inquiry), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create inquiry" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function GET() {
  try {
    const inquiries = await prisma.inquiry.findMany();

    return new Response(JSON.stringify(inquiries), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch inquiries" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
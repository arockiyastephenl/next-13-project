import { NextResponse } from 'next/server';
import { prisma } from "@/db"


export async function POST(req: Request){
  console.log("Test handler");

  const res = await req.json()
  if (req.method === 'POST') {

    try {
      const createdCustomer = await prisma.customer.create({
        data: {
          name:res.name,
          email: res.email,
          phoneNumber : res.phone,
          address: res.address
        },
      });
     return NextResponse.json(createdCustomer)
    } catch (error) {
      console.error('Error creating customer:', error);
     return NextResponse.json({ error: 'Internal server error' });
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' });
  }
}

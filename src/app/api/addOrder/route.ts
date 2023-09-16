import { NextResponse } from 'next/server';
import { prisma } from "@/db"


export async function POST(req: Request){
  console.log("Test handler");

  const res = await req.json()
  if (req.method === 'POST') {

    try {
      const createdOrder = await prisma.order.create({
        data: {
          invoices:res.invoices,
          totalAmount: res.totalAmount,
          dueDate : res.dueDate,
          claimedBy: res.claimedBy,
          Customer: res.Customer,
          customerId: res.customerId,
          // OrderItem: res.orderItem
        },
      });
     return NextResponse.json(createdOrder)
    } catch (error) {
      console.error('Error creating customer:', error);
     return NextResponse.json({ error: 'Internal server error' });
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' });
  }
}

"use server"

import { CartItem } from "@/components/Cart/CartItem"
import prisma from "@/lib/prisma"

export const createOrder = async (cart: CartItem[]) => {
  const total = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)

  if (!cart.length) throw new Error ("empty cart can't place order")

  try {
  await prisma.order.create({
    data: {
      total,
      items: {
        create: cart.map((item) => ({
          productName: item.title,
          priceAtTime: Number(item.price),
          quantity: item.quantity,
          productId: item.id,
        })),
      },
    },
  })
  console.log("successful")
  } catch(e) {
    throw new Error("there was an error")
  }


}

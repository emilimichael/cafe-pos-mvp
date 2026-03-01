"use server"

import prisma from "@/lib/prisma"
import { CartItem } from "@/components/Cart/CartTable"

export const createOrder = async (cart: CartItem[]) => {
  const total = cart.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0)

  const order = await prisma.order.create({
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

  return order
}

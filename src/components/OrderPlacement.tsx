'use client'
import { useState } from "react";
import { CartItem, CartTable } from "./Cart/CartTable"
import { PrismaProduct, ProductList } from "./Product/ProductList"

export const OrderPlacement = ({products}: {products: PrismaProduct[]}) => {
   const [cart, setCart] = useState<CartItem[]>([]);

   const addToCart = (product: PrismaProduct) => setCart(prev =>{
    const existing = prev.find((item) => product.id === item.id)

    if (existing) {
      return prev.map((item) => {
        return item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      })
    }
    return [...prev, {...product, quantity: 1}]
   })
    return (
      <div className="flex flex-col gap-10">
        <ProductList onProductCardClick={addToCart} products={products} />
        <CartTable products={cart} />
      </div>
    );
}
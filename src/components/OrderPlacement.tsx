'use client'
import { useState } from "react";
import { CartItem, CartTable } from "./Cart/CartTable"
import { PrismaProduct, ProductList } from "./Product/ProductList"

export const OrderPlacement = ({products}: {products: PrismaProduct[]}) => {
   const [cart, setCart] = useState<CartItem[]>([]);

   const addToCart = (product: PrismaProduct) => setCart(prev => [...prev, {...product, cartId: crypto.randomUUID()}])
    return (
      <div className="flex flex-col gap-10">
        <ProductList onProductCardClick={addToCart} products={products} />
        <CartTable products={cart} />
      </div>
    );
}
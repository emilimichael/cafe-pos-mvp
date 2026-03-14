'use client'
import { useState } from "react";
import {  CartTable } from "./Cart/CartTable"
import { PrismaProduct, ProductList } from "./Product/ProductList"
import { CartItem } from "./Cart/CartItem";
import { useCartStore } from "@/stores/cartStore";

export const OrderPlacement = ({products}: {products: PrismaProduct[]}) => {
const addToCart = useCartStore((state) => state.addToCard)
    return (
      <div className="flex flex-col gap-10">
        <ProductList onProductCardClick={addToCart} products={products} />
        <CartTable />
      </div>
    );
}
'use client'
import { useState } from "react";
import { EmiButton } from "../Button/EmiButton";
import { PrismaProduct } from "../Product/ProductList";
import { Dialog } from "../Dialog/Dialog";
import { createOrder } from "@/lib/actions/orders";
import { CartItem } from "./CartItem";
import { useCartStore } from "@/stores/cartStore";



export const CartTable = () => {
  const products = useCartStore((state)=> state.cart)
  const totalPrice = products.reduce((sum, product)=> sum + Number(product.price) * product.quantity, 0)

  const [placeOrderDialog, setPlaceOrderDialog] = useState(false)
  const [clearCartDialog, setClearCartDialog] = useState(false)

  const clearCart = useCartStore((state) => state.clearCart)

  const placeOrder = async (products: CartItem[]) => { await createOrder(products); setPlaceOrderDialog(false) }

  return (
    <div className="flex flex-col items-center bg-blue-200 w-3xl h-100 rounded-xl p-3 gap-2">
      <h2>Cart</h2>

      <div className="flex-1 overflow-auto w-full flex flex-col gap-2">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <div className="w-full flex justify-between bg-white rounded-sm p-1">
        <span>{"Total"}</span>
        <span>{totalPrice.toFixed(2)} $</span>
      </div>
      <div className="flex gap-20">
        <EmiButton
          buttonText="Place Order"
          onClick={() => setPlaceOrderDialog(true)}
        />
        <EmiButton
          buttonText="Clear Cart"
          secondary
          onClick={() => setClearCartDialog(true)}
        />
      </div>
      <Dialog
        isOpen={placeOrderDialog}
        text="Place order?"
        onClose={() => setPlaceOrderDialog(false)}
        onConfirm={() => placeOrder(products)}
      />
      <Dialog
        isOpen={clearCartDialog}
        text="Clear cart?"
        onClose={() => setClearCartDialog(false)}
        onConfirm={() => { clearCart(); setClearCartDialog(false) }}
      />
    </div>
  );
};



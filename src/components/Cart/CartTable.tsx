'use client'
import { EmiButton } from "../Button/EmiButton";
import { PrismaProduct } from "../Product/ProductList";

export type CartItem =  PrismaProduct & { quantity: number}


export const CartTable = ({ products }: { products: CartItem[] }) => {
  const totalPrice = products.reduce((sum, product)=> sum + Number(product.price) * product.quantity, 0)
  return (
    <div className="flex flex-col items-center bg-indigo-400 w-3xl h-100 rounded-xl p-3 gap-2">
      <h2>Cart</h2>

      <div className="flex-1 overflow-auto w-full flex flex-col gap-2">
        {products.map((product) => (
          <div
            className="bg-pink-300 rounded-sm p-1 flex justify-between"
            key={product.id}
          >
            <div>
              <span>{product.title}</span>
              <span> x {product.quantity}</span>
            </div>
            <span>{product.price} $</span>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-between bg-white rounded-sm p-1">
        <span>{"Total"}</span>
        <span>{totalPrice.toFixed(2)} $</span>
      </div>
      <div className="flex-end">
        <EmiButton
          buttonText="Place Order"
          onClick={() => console.log("i was clicked")}
        />
      </div>
    </div>
  );
};

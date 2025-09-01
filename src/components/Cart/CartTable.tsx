'use client'
import { PrismaProduct } from "../Product/ProductList";
export type CartItem =  PrismaProduct & {cartId: string}


export const CartTable = ({ products }: { products: CartItem[] }) => {
  return (
    <div className="flex flex-col items-center bg-indigo-400 w-3xl h-100 rounded-xl p-3 text-blue-950">
      <h2 className="mb-2">Cart</h2>

      <div className="overflow-auto w-full flex flex-col gap-2">
        {products.map((product) => (
          <div className="bg-pink-300 rounded-sm p-1 flex justify-between text-blue-950" key={product.cartId}>
            <span>{product.title}</span>
            <span>{product.price}$</span>
          </div>
        ))}
      </div>
    </div>
  );
};

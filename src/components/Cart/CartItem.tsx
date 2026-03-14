import { useCartStore } from "@/stores/cartStore";
import { EmiButton } from "../Button/EmiButton";
import { PrismaProduct } from "../Product/ProductList";

export type CartItem = PrismaProduct & { quantity: number };

export type CartItemProps = {
    product: CartItem

}

export const CartItem = ({product}: CartItemProps) => {
const productFinalPrice = Number(product.price) * product.quantity

const increment = useCartStore((state) => state.increment)
const decrement = useCartStore((state)=> state.decrement)
return (
  <div
    className="bg-white  border  border-gray-100 drop-shadow drop-shadow-gray-200 rounded-sm p-1 flex justify-between"
    key={product.id}
  >
    <div className="flex items-center gap-4">
      <span>{product.title}</span>
      <div className="flex items-center gap-3">
        <EmiButton
          round
          buttonText="−"
          onClick={() => decrement(product.id)}
        />
        <span> {product.quantity}</span>
        <EmiButton
          round
          buttonText="+"
          onClick={() => increment(product.id)}
        />
      </div>
    </div>
    <span>{productFinalPrice.toFixed(2)} $</span>
  </div>
);

}
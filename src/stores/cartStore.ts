import { CartItem } from "@/components/Cart/CartItem";
import { PrismaProduct } from "@/components/Product/ProductList";
import { create } from "zustand";

type CartStore = {
    cart: CartItem[];
    clearCart: () => void;
    addToCard: (product: PrismaProduct) => void;
    increment: (id: number) => void;
    decrement: (id: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
    cart: [],
    clearCart: () => set((state)=> ({cart: []})),
    addToCard: (product) => set((state) => {
        const existing = state.cart.find((item) => item.id === product.id)
        if (existing) {
            return { cart: state.cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) }
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] }
    }),
    increment: (id) => set((state) => ({
        cart: state.cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    })),
    decrement: (id) => set((state) => ({
        cart: state.cart
            .map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
            .filter((item) => item.quantity > 0)
    })),
}));
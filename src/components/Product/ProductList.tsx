import { ProductCard } from "./ProductCard";
import prisma from "@/lib/prisma";


export const ProductList = async () => {
  const products = await prisma.products.findMany();
  return (
    <div className="flex gap-5 flex-wrap">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price.toString()}
          id={product.id}
        />
      ))}
    </div>
  );
   
};

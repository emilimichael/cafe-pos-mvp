import { ProductCard } from "./ProductCard";

export type PrismaProduct = {
  id: number,
  title: string,
  price: string,
}

export const ProductList = ({products, onProductCardClick} : {products: PrismaProduct[], onProductCardClick: (product: PrismaProduct) => void}) => {

  return (
    <>
      <div className="flex gap-5 flex-wrap">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price.toString()}
            id={product.id}
            onClick={() =>
              onProductCardClick(product)
            }
          />
        ))}
      </div>
    </>
  );
   
};

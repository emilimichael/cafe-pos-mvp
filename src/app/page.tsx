import { OrderPlacement } from "@/components/OrderPlacement";
import prisma from "@/lib/prisma";
import { HomeClient } from "./pages/HomeClient";



export default async function Home() {
  const products = await prisma.product.findMany();
  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="flex items-center justify-center gap-4 h-full overflow-hidden">
       <OrderPlacement products={products?.map((product)=> {
        return {
          id: product.id,
          title: product.name,
          price: product.price.toFixed(2)
        }
       })}/>
      </div>
      <HomeClient />
    </main>
  );
}

import { ProductList } from "@/components/Product/ProductList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col items-center justify-center gap-4 h-full overflow-hidden">
        <ProductList/>   
     </div>
    </main>
  );
}

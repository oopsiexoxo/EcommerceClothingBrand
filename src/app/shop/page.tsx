import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col border-b border-gray-200 pb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Shop All</h1>
        <p className="mt-4 text-base text-gray-500">
          Browse our complete collection of premium clothing.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

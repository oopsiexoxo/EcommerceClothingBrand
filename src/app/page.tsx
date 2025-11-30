import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  // Get featured products (first 3)
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90" />
          {/* Placeholder for hero image if we had one */}
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              New Arrivals Are Here
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Discover the latest trends in fashion. Elevate your style with our premium collection of clothing designed for comfort and elegance.
            </p>
            <div className="mt-10 flex gap-4">
              <Link
                href="/shop"
                className="flex items-center justify-center rounded-md bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 md:py-4 md:px-10 md:text-lg"
              >
                Shop Collection
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-white hover:bg-gray-700 md:py-4 md:px-10 md:text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Products</h2>
          <Link href="/shop" className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
            See all <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories/Promo Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg bg-gray-200 p-8 h-64 md:h-80 flex items-center">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900">Men's Collection</h3>
                <p className="mt-2 text-gray-600">Find the perfect outfit for any occasion.</p>
                <Link href="/shop?category=Men" className="mt-4 inline-block font-medium text-indigo-600 hover:text-indigo-500">
                  Shop Men's
                </Link>
              </div>
              {/* Background decoration could go here */}
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-200 p-8 h-64 md:h-80 flex items-center">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900">Women's Collection</h3>
                <p className="mt-2 text-gray-600">Explore our latest styles and trends.</p>
                <Link href="/shop?category=Women" className="mt-4 inline-block font-medium text-indigo-600 hover:text-indigo-500">
                  Shop Women's
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

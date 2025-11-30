import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
            We are passionate about providing high-quality clothing that combines style, comfort, and sustainability.
          </p>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              alt="Our Store"
              fill
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="mt-10 lg:mt-0 lg:pl-8">
            <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-4 text-lg text-gray-500">
              Founded in 2023, Modern Clothing Store began with a simple mission: to make premium fashion accessible to everyone. We believe that looking good shouldn't come at the expense of the planet or your wallet.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Our team of designers works tirelessly to create timeless pieces that you'll love for years to come. We source only the finest materials and work with ethical manufacturers to ensure that every garment meets our high standards.
            </p>
            
            <h2 className="mt-8 text-2xl font-bold text-gray-900">Our Values</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-lg text-gray-500">
              <li>Quality over quantity</li>
              <li>Sustainable practices</li>
              <li>Inclusive sizing</li>
              <li>Customer satisfaction</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

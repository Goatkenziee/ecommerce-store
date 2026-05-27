import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-5xl font-bold text-primary-dark mb-4">
        Welcome to Our E-commerce Store
      </h1>
      <p className="text-xl text-text-light mb-8 max-w-2xl">
        Discover a curated selection of high-quality products. 
        Shop with confidence and enjoy a seamless shopping experience.
      </p>
      <div className="flex space-x-4">
        <Link href="/products">
          <button className="px-8 py-3 bg-primary-DEFAULT text-white rounded-lg shadow-md hover:bg-primary-dark transition duration-300 text-lg">
            Shop Now
          </button>
        </Link>
        <Link href="/about">
          <button className="px-8 py-3 bg-secondary-DEFAULT text-white rounded-lg shadow-md hover:bg-secondary-dark transition duration-300 text-lg">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}

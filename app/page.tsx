import Link from 'next/link';

// Placeholder for product data - in a real app, this would come from an API or database
const products = [
  { id: '1', name: 'Stylish T-Shirt', price: 25.99, imageUrl: '/images/tshirt.jpg' },
  { id: '2', name: 'Cool Jeans', price: 59.99, imageUrl: '/images/jeans.jpg' },
  { id: '3', name: 'Awesome Hoodie', price: 75.00, imageUrl: '/images/hoodie.jpg' },
];

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Welcome to Our Store!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-lg overflow-hidden">
            <Link href={`/products/${product.id}`}>
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover cursor-pointer" />
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
              <Link href={`/products/${product.id}`}>
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

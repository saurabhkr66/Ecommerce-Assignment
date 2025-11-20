import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductDetail } from '../hooks/useProductDetail';
import { useCartStore } from '../store/cartStore';
import Spinner from '../components/ui/spinner';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, isLoading, error } = useProductDetail(id);
  const addItem = useCartStore((state) => state.addItem);
  
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="large" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 text-lg">Product not found.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-blue-600 underline"
        >
          Back to products
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-gray-50 rounded-lg p-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-96 object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
            
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < Math.round(product.rating.rate) ? 'text-yellow-500' : 'text-gray-300'}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-600">
                ({product.rating.count} reviews)
              </span>
            </div>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="mb-6">
            <span className="inline-block bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700">
              {product.category}
            </span>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <label className="font-semibold">Quantity:</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="px-4 py-2 border border-gray-300 rounded-lg"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>

          {showSuccess && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
              ✓ Added to cart successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

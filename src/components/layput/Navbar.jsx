import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

const Navbar = () => {
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          ShopHub
        </Link>

        <Link
          to="/cart"
          className="relative flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          <span>🛒 Cart</span>
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

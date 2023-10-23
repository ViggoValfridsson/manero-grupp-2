import { Heart, ShoppingBag, Star } from "lucide-react";
import { apiDomain } from "../helpers/api-domain";
import { handleAddToCart } from "../helpers/add-to-cart";
import { useContext, useState } from "react";
import { CartContext } from "../App";
import { Link } from "react-router-dom";

export default function ProductGridCard({ product }) {
  const cartState = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);

  const handleShoppingBagClick = (e) => {
    e.preventDefault();
    handleAddToCart(cartState, product);
    setIsInCart(true);
  };

  return (
    <Link to={`/products/${product.id}`}>
      <div className="product-grid-card">
        <div className="product-card-image-wrapper">
          <img src={apiDomain.https + product.imagePaths[0]} alt={product.name} />
          <div className="product-card-icons">
            <button >
              <Heart />
            </button>
            <button onClick={handleShoppingBagClick}>
              <ShoppingBag style={{ color: isInCart ? "green" : "var(--color-succes)" }} />
            </button>
          </div>
        </div>
        <div className="product-card-details">
          <div id="a" className="product-card-rating">
            <Star color="orange" />
            <Star color="orange" />
            <Star color="orange" />
            <Star color="orange" />
            <Star color="orange" />
            <span className="product-card-reviews">(3)</span>
          </div>
          <p id="b" className="product-name">
            {product.name}
          </p>
          <p id="c" className="product-price">
            {product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}
